import { createIcon } from '../createIcon';

export const Truck = createIcon('Truck', [
  ['rect', { x: 1, y: 3, width: 15, height: 13, key: "svg-0" }],
  ['polygon', { points: "16 8 20 8 23 11 23 16 16 16 16 8", key: "svg-1" }],
  ['circle', { cx: 5.5, cy: 18.5, r: 2.5, key: "svg-2" }],
  ['circle', { cx: 18.5, cy: 18.5, r: 2.5, key: "svg-3" }],
]);

export default Truck;
