import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerDownLeft(props) {
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
      <Path d="M9 10l-5 5 5 5" />
      <Path d="M20 4v7a4 4 0 01-4 4H4" />
    </Svg>
  );
}

export default SvgCornerDownLeft;
