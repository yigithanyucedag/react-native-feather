import { createIcon } from '../createIcon';

export const LifeBuoy = createIcon('LifeBuoy', [
  ['circle', { cx: 12, cy: 12, r: 10, key: "svg-0" }],
  ['circle', { cx: 12, cy: 12, r: 4, key: "svg-1" }],
  ['line', { x1: 4.93, y1: 4.93, x2: 9.17, y2: 9.17, key: "svg-2" }],
  ['line', { x1: 14.83, y1: 14.83, x2: 19.07, y2: 19.07, key: "svg-3" }],
  ['line', { x1: 14.83, y1: 9.17, x2: 19.07, y2: 4.93, key: "svg-4" }],
  ['line', { x1: 14.83, y1: 9.17, x2: 18.36, y2: 5.64, key: "svg-5" }],
  ['line', { x1: 4.93, y1: 19.07, x2: 9.17, y2: 14.83, key: "svg-6" }],
]);

export default LifeBuoy;
