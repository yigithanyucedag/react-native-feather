import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgBattery(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <Rect x={1} y={6} width={18} height={12} rx={2} ry={2} />
      <Path d="M23 13v-2" />
    </Svg>
  );
}

export default SvgBattery;
