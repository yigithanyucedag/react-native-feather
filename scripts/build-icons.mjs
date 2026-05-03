#!/usr/bin/env node
/**
 * Reads feather-icons' SVG content strings and emits one TypeScript file per
 * icon under src/icons/, plus a barrel src/icons/index.ts. The output uses the
 * `createIcon(name, iconNode)` factory so the runtime stays tiny.
 */
import { mkdir, rm, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const feather = require('feather-icons');

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');
const ICONS_DIR = resolve(ROOT, 'src/icons');

const SUPPORTED_TAGS = new Set([
  'circle',
  'ellipse',
  'line',
  'path',
  'polygon',
  'polyline',
  'rect',
]);

const ELEMENT_RE = /<(\w+)\s*([^>]*?)\s*(?:\/>|>\s*<\/\1>)/g;
const ATTR_RE = /([\w-]+)\s*=\s*"([^"]*)"/g;
const NUMERIC_RE = /^-?\d+(?:\.\d+)?$/;

const toPascalCase = (s) =>
  s
    .split(/[-_]/)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('');

const camelCase = (s) => s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());

const parseAttrs = (attrStr) => {
  const out = {};
  for (const match of attrStr.matchAll(ATTR_RE)) {
    const [, rawKey, value] = match;
    const key = camelCase(rawKey);
    out[key] = NUMERIC_RE.test(value) ? Number(value) : value;
  }
  return out;
};

const parseIconContents = (contents, iconName) => {
  const nodes = [];
  let i = 0;
  for (const match of contents.matchAll(ELEMENT_RE)) {
    const [, tag, attrStr] = match;
    if (!SUPPORTED_TAGS.has(tag)) {
      throw new Error(
        `Unsupported SVG tag <${tag}> in feather icon "${iconName}". Add it to elementMap in src/createIcon.ts.`,
      );
    }
    const attrs = parseAttrs(attrStr);
    attrs.key = `svg-${i++}`;
    nodes.push([tag, attrs]);
  }
  if (nodes.length === 0) {
    throw new Error(`No elements parsed for "${iconName}". Contents: ${contents}`);
  }
  return nodes;
};

const stringifyAttrs = (attrs) => {
  const entries = Object.entries(attrs).map(([k, v]) => {
    const value = typeof v === 'number' ? String(v) : JSON.stringify(v);
    return `${k}: ${value}`;
  });
  return `{ ${entries.join(', ')} }`;
};

const stringifyNodes = (nodes) => {
  const lines = nodes.map(([tag, attrs]) => `  ['${tag}', ${stringifyAttrs(attrs)}]`);
  return `[\n${lines.join(',\n')},\n]`;
};

const renderIconFile = (componentName, nodes) => `import { createIcon } from '../createIcon';

export const ${componentName} = createIcon('${componentName}', ${stringifyNodes(nodes)});

export default ${componentName};
`;

const renderBarrel = (names) =>
  `${names.map((n) => `export { ${n} } from './${n}';`).join('\n')}\n`;

const main = async () => {
  await rm(ICONS_DIR, { recursive: true, force: true });
  await mkdir(ICONS_DIR, { recursive: true });

  const entries = Object.entries(feather.icons);
  entries.sort(([a], [b]) => a.localeCompare(b));

  const componentNames = [];

  for (const [iconName, icon] of entries) {
    const componentName = toPascalCase(iconName);
    const nodes = parseIconContents(icon.contents, iconName);
    const filePath = resolve(ICONS_DIR, `${componentName}.ts`);
    await writeFile(filePath, renderIconFile(componentName, nodes), 'utf8');
    componentNames.push(componentName);
  }

  componentNames.sort();
  await writeFile(
    resolve(ICONS_DIR, 'index.ts'),
    renderBarrel(componentNames),
    'utf8',
  );

  console.log(`Generated ${componentNames.length} icons in src/icons/`);
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
