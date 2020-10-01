import * as React from "react";
import Svg, { Rect } from "react-native-svg";

function SvgSquare(props) {
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
      <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    </Svg>
  );
}

export default SvgSquare;
