import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgMinimize2(props: SvgProps) {
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
      <Path d="M4 14h6v6M20 10h-6V4M14 10l7-7M3 21l7-7" />
    </Svg>
  );
}

export default SvgMinimize2;
