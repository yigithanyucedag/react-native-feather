import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRepeat(props) {
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
      <Path d="M17 1l4 4-4 4" />
      <Path d="M3 11V9a4 4 0 014-4h14M7 23l-4-4 4-4" />
      <Path d="M21 13v2a4 4 0 01-4 4H3" />
    </Svg>
  );
}

export default SvgRepeat;
