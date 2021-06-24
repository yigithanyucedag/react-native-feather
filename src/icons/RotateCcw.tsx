import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgRotateCcw(props: SvgProps) {
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
      <Path d="M1 4v6h6" />
      <Path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
    </Svg>
  );
}

export default SvgRotateCcw;
