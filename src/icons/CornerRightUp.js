import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerRightUp(props) {
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
      <Path d="M10 9l5-5 5 5" />
      <Path d="M4 20h7a4 4 0 004-4V4" />
    </Svg>
  );
}

export default SvgCornerRightUp;
