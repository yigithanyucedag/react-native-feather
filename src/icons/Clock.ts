import { createIcon } from '../createIcon';

export const Clock = createIcon('Clock', [
  ['circle', { cx: 12, cy: 12, r: 10, key: "svg-0" }],
  ['polyline', { points: "12 6 12 12 16 14", key: "svg-1" }],
]);

export default Clock;
