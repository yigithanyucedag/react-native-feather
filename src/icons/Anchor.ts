import { createIcon } from '../createIcon';

export const Anchor = createIcon('Anchor', [
  ['circle', { cx: 12, cy: 5, r: 3, key: "svg-0" }],
  ['line', { x1: 12, y1: 22, x2: 12, y2: 8, key: "svg-1" }],
  ['path', { d: "M5 12H2a10 10 0 0 0 20 0h-3", key: "svg-2" }],
]);

export default Anchor;
