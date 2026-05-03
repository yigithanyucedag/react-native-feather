import { createIcon } from '../createIcon';

export const Cpu = createIcon('Cpu', [
  ['rect', { x: 4, y: 4, width: 16, height: 16, rx: 2, ry: 2, key: "svg-0" }],
  ['rect', { x: 9, y: 9, width: 6, height: 6, key: "svg-1" }],
  ['line', { x1: 9, y1: 1, x2: 9, y2: 4, key: "svg-2" }],
  ['line', { x1: 15, y1: 1, x2: 15, y2: 4, key: "svg-3" }],
  ['line', { x1: 9, y1: 20, x2: 9, y2: 23, key: "svg-4" }],
  ['line', { x1: 15, y1: 20, x2: 15, y2: 23, key: "svg-5" }],
  ['line', { x1: 20, y1: 9, x2: 23, y2: 9, key: "svg-6" }],
  ['line', { x1: 20, y1: 14, x2: 23, y2: 14, key: "svg-7" }],
  ['line', { x1: 1, y1: 9, x2: 4, y2: 9, key: "svg-8" }],
  ['line', { x1: 1, y1: 14, x2: 4, y2: 14, key: "svg-9" }],
]);

export default Cpu;
