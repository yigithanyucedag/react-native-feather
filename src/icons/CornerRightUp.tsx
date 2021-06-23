import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgCornerRightUp(props: SvgProps) {
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
      <Path d="M10 9l5-5 5 5" />
      <Path d="M4 20h7a4 4 0 004-4V4" />
    </Svg>
  );
}

export default SvgCornerRightUp;
