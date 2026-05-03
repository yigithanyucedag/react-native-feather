import { createIcon } from '../createIcon';

export const Crosshair = createIcon('Crosshair', [
  ['circle', { cx: 12, cy: 12, r: 10, key: "svg-0" }],
  ['line', { x1: 22, y1: 12, x2: 18, y2: 12, key: "svg-1" }],
  ['line', { x1: 6, y1: 12, x2: 2, y2: 12, key: "svg-2" }],
  ['line', { x1: 12, y1: 6, x2: 12, y2: 2, key: "svg-3" }],
  ['line', { x1: 12, y1: 22, x2: 12, y2: 18, key: "svg-4" }],
]);

export default Crosshair;
