import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRefreshCcw(props) {
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
      <Path d="M1 4v6h6M23 20v-6h-6" />
      <Path d="M20.49 9A9 9 0 005.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 013.51 15" />
    </Svg>
  );
}

export default SvgRefreshCcw;
