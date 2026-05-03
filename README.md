# react-native-feather

[![npm](https://img.shields.io/npm/v/react-native-feather.svg?style=flat-square)](https://www.npmjs.com/package/react-native-feather)
[![downloads](https://img.shields.io/npm/dm/react-native-feather.svg?style=flat-square)](https://www.npmjs.com/package/react-native-feather)
[![bundlephobia](https://img.shields.io/bundlephobia/minzip/react-native-feather?style=flat-square)](https://bundlephobia.com/package/react-native-feather)
[![license](https://img.shields.io/npm/l/react-native-feather.svg?style=flat-square)](./LICENSE)

[Feather Icons](https://feathericons.com) for React Native — a thin, typed, tree-shakable wrapper around `react-native-svg`. 287 icons, ref-forwarding, `size`/`color`/`absoluteStrokeWidth` props.

> **Note on the icon set.** Feather is designed by [Cole Bemis](https://github.com/feathericons/feather) (MIT). The set is largely stable — the upstream is in maintenance mode and no new icons have shipped since 2020. If you need a constantly growing set, consider [Lucide](https://lucide.dev) (the active fork). This package keeps the original Feather set faithful for projects that want exactly that.

## Install

```bash
npm install react-native-feather react-native-svg
# or
yarn add react-native-feather react-native-svg
```

`react-native-svg` is a peer dependency. Any version `>=12` works.

## Usage

```tsx
import { ArrowUpCircle } from 'react-native-feather';

export const Demo = () => <ArrowUpCircle />;
```

Override defaults with props:

```tsx
<ArrowUpCircle size={32} color="#0ea5e9" strokeWidth={1.5} />
```

You can also import the whole pack:

```tsx
import * as Icon from 'react-native-feather';

<Icon.ArrowUpCircle />
```

Or deep-import a single icon (helps with bundlers that don't tree-shake well):

```tsx
import { ArrowUpCircle } from 'react-native-feather/icons/ArrowUpCircle';
```

### Forwarded refs

Every icon forwards its ref to the underlying `Svg`, so you can drive imperative APIs (e.g. `react-native-reanimated`) directly:

```tsx
import { useRef } from 'react';
import { Activity } from 'react-native-feather';

const ref = useRef(null);
<Activity ref={ref} />
```

## Props

All `react-native-svg` `<Svg>` props are accepted. Specific to icons:

| Prop                  | Type             | Default          | Description                                                                                                                          |
| --------------------- | ---------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `size`                | number \| string | `24`             | Sets both `width` and `height`.                                                                                                      |
| `color`               | string           | `"currentColor"` | Stroke color of the line.                                                                                                            |
| `strokeWidth`         | number \| string | `2`              | Width of the stroke.                                                                                                                 |
| `absoluteStrokeWidth` | boolean          | `false`          | Scales stroke down as the icon grows so perceived weight stays constant: `strokeWidth * 24 / size`. Useful at small sizes (16, 14). |
| `width`               | number \| string | —                | Overrides `size` for width only.                                                                                                     |
| `height`              | number \| string | —                | Overrides `size` for height only.                                                                                                    |
| `fill`                | string           | `"none"`         | Fill color (Feather icons are line-based, leave as `none` unless you know what you're doing).                                       |

## Migrating from v1

v2 is mostly drop-in. The breaking changes:

- `width` / `height` defaults moved into a `size` prop. The old props still work; if you set both, the explicit one wins.
- Use `color` instead of `stroke` (`stroke` still works but `color` is the documented prop).
- Now ships ESM + CJS via the `exports` field. If your tooling pinned to `lib/index.js`, switch to the package name (e.g. `import { Activity } from 'react-native-feather'`).
- Peer deps widened: `react-native-svg >=12`, `react >=16.8`.

```diff
- <ArrowUpCircle stroke="red" width={32} height={32} />
+ <ArrowUpCircle color="red" size={32} />
```

## Available icons

All 287 icons from Feather Icons. Names follow PascalCase, matching the Feather identifier:

`arrow-up-circle` → `ArrowUpCircle`, `alert-triangle` → `AlertTriangle`, etc.

Browse the full set at [feathericons.com](https://feathericons.com).

## Custom icons

The factory used internally is exported, so you can ship custom icons that share the same API:

```tsx
import { createIcon } from 'react-native-feather';

export const Sparkle = createIcon('Sparkle', [
  ['path', { d: 'M12 2 14 10 22 12 14 14 12 22 10 14 2 12 10 10z', key: 'svg-0' }],
]);
```

## Credits

- **Icons:** [Feather Icons](https://github.com/feathericons/feather) by [Cole Bemis](https://github.com/colebemis), MIT.
- **React Native wrapper:** maintained by [@yigithanyucedag](https://github.com/yigithanyucedag), MIT.

## License

[MIT](./LICENSE)
