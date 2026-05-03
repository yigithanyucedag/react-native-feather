# Changelog

All notable changes to this project will be documented in this file. The format
follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this
project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.0.0] — 2026-05-03

The first major-version bump in nearly five years. Tooling, types, and the
public component API have all been modernized; the icons themselves are still
the original Feather set (now at upstream `4.29.2`).

### Added

- `size` prop as a shorthand for `width` + `height` (default `24`). _(closes #16)_
- `color` prop as the documented alias for `stroke` (default `"currentColor"`).
- `absoluteStrokeWidth` prop — keeps perceived stroke weight constant across
  sizes by computing `strokeWidth * 24 / size`. Useful for 14–16 px icons.
- Forwarded refs on every icon, so you can target the underlying `Svg` from
  hooks like `useAnimatedRef` or third-party imperative APIs. _(closes #17)_
- `displayName` on every icon, removes the
  "Component definition is missing display name" lint warning. _(closes #15)_
- `createIcon(name, iconNode)` factory exported for users who want to ship
  custom icons with the same API.
- Per-icon deep imports via the `exports` map, e.g.
  `import { ArrowUpCircle } from 'react-native-feather/icons/ArrowUpCircle'`.
- TypeScript declarations for both ESM and CJS (`.d.ts` and `.d.cts`).
- A real `LICENSE` file at the repository root. _(closes #18)_
- CI workflow runs lint, typecheck, tests and build against Node 20 and 22.
- npm provenance attestation on every published release.

### Changed

- **Build pipeline:** `tsc` + `api-extractor` replaced with `tsup` (esbuild
  under the hood). Output now lives in `dist/`, not `lib/`.
- **Module format:** dual ESM + CJS through the `exports` field, with proper
  `types` resolution for both. Drops the legacy single-`main` shape.
- **Icon source:** SVGR is gone. Icons are now generated from `feather-icons`
  by `scripts/build-icons.mjs` and committed to `src/icons/`, so the source
  tree is browseable on GitHub and the build is fully reproducible.
- **Peer dependencies widened.** Was `react-native >=0.46`,
  `react-native-svg >=5.3`. Now `react >=16.8`, `react-native-svg >=12`,
  `react-native: "*"`.
- Bumped `feather-icons` from `4.28.0` to `4.29.2` (no new icons upstream,
  only build tooling fixes).
- Sorted icon exports alphabetically in the barrel index.
- Each path/polygon/etc. inside an icon now has a stable `key`, silencing the
  React list-key warning when icons mount.

### Removed

- `api-extractor` and its config — `tsup` emits declarations directly.
- `.svgrrc.js` and the SVGR dev dependency.
- The old publish workflow that auto-committed version bumps back to `master`
  and ran `contributors-readme-action`. Replaced with a tag-driven publish
  pipeline that creates a GitHub release with auto-generated notes.

### Migration

```diff
- <ArrowUpCircle stroke="red" width={32} height={32} />
+ <ArrowUpCircle color="red" size={32} />
```

The old props still resolve, so existing call sites keep working until you
choose to update them.

## [1.1.2] — 2021-06-27

See git history for releases prior to v2.

[2.0.0]: https://github.com/yigithanyucedag/react-native-feather/compare/v1.1.2...v2.0.0
[1.1.2]: https://github.com/yigithanyucedag/react-native-feather/releases/tag/v1.1.2
