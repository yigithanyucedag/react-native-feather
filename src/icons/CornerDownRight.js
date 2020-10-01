import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerDownRight(props) {
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
      <Path d="M15 10l5 5-5 5" />
      <Path d="M4 4v7a4 4 0 004 4h12" />
    </Svg>
  );
}

export default SvgCornerDownRight;
