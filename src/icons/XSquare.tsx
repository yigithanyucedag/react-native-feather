import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

function SvgXSquare(props: SvgProps) {
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
      <Path d="M9 9l6 6M15 9l-6 6" />
    </Svg>
  );
}

export default SvgXSquare;
