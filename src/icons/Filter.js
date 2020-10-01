import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilter(props) {
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
      <Path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" />
    </Svg>
  );
}

export default SvgFilter;
