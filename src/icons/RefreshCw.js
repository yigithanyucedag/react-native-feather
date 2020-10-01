import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRefreshCw(props) {
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
      <Path d="M23 4v6h-6M1 20v-6h6" />
      <Path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" />
    </Svg>
  );
}

export default SvgRefreshCw;
