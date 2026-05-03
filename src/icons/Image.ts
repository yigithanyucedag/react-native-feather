import { createIcon } from '../createIcon';

export const Image = createIcon('Image', [
  ['rect', { x: 3, y: 3, width: 18, height: 18, rx: 2, ry: 2, key: "svg-0" }],
  ['circle', { cx: 8.5, cy: 8.5, r: 1.5, key: "svg-1" }],
  ['polyline', { points: "21 15 16 10 5 21", key: "svg-2" }],
]);

export default Image;
