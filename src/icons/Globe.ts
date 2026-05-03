import { createIcon } from '../createIcon';

export const Globe = createIcon('Globe', [
  ['circle', { cx: 12, cy: 12, r: 10, key: "svg-0" }],
  ['line', { x1: 2, y1: 12, x2: 22, y2: 12, key: "svg-1" }],
  ['path', { d: "M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z", key: "svg-2" }],
]);

export default Globe;
