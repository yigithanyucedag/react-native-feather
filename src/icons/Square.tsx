import * as React from "react";
import Svg, { SvgProps, Rect } from "react-native-svg";

function SvgSquare(props: SvgProps) {
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
      <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
    </Svg>
  );
}

export default SvgSquare;
