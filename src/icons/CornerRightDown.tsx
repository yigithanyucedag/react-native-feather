import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgCornerRightDown(props: SvgProps) {
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
      <Path d="M10 15l5 5 5-5" />
      <Path d="M4 4h7a4 4 0 014 4v12" />
    </Svg>
  );
}

export default SvgCornerRightDown;
