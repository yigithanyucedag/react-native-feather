import { createIcon } from '../createIcon';

export const Frown = createIcon('Frown', [
  ['circle', { cx: 12, cy: 12, r: 10, key: "svg-0" }],
  ['path', { d: "M16 16s-1.5-2-4-2-4 2-4 2", key: "svg-1" }],
  ['line', { x1: 9, y1: 9, x2: 9.01, y2: 9, key: "svg-2" }],
  ['line', { x1: 15, y1: 9, x2: 15.01, y2: 9, key: "svg-3" }],
]);

export default Frown;
