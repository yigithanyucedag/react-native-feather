import { createIcon } from '../createIcon';

export const Move = createIcon('Move', [
  ['polyline', { points: "5 9 2 12 5 15", key: "svg-0" }],
  ['polyline', { points: "9 5 12 2 15 5", key: "svg-1" }],
  ['polyline', { points: "15 19 12 22 9 19", key: "svg-2" }],
  ['polyline', { points: "19 9 22 12 19 15", key: "svg-3" }],
  ['line', { x1: 2, y1: 12, x2: 22, y2: 12, key: "svg-4" }],
  ['line', { x1: 12, y1: 2, x2: 12, y2: 22, key: "svg-5" }],
]);

export default Move;
