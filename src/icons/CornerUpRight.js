import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerUpRight(props) {
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
      <Path d="M15 14l5-5-5-5" />
      <Path d="M4 20v-7a4 4 0 014-4h12" />
    </Svg>
  );
}

export default SvgCornerUpRight;
