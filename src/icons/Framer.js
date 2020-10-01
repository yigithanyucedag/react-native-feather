import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFramer(props) {
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
      <Path d="M5 16V9h14V2H5l14 14h-7m-7 0l7 7v-7m-7 0h7" />
    </Svg>
  );
}

export default SvgFramer;
