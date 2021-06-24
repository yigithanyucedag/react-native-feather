import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

function SvgBattery(props: SvgProps) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Rect x={1} y={6} width={18} height={12} rx={2} ry={2} />
      <Path d="M23 13v-2" />
    </Svg>
  );
}

export default SvgBattery;
