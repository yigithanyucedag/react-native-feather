import * as React from "react";
import Svg, { Rect, Circle } from "react-native-svg";

function SvgToggleLeft(props) {
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
      <Rect x={1} y={5} width={22} height={14} rx={7} ry={7} />
      <Circle cx={8} cy={12} r={3} />
    </Svg>
  );
}

export default SvgToggleLeft;
