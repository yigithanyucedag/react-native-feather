import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgArrowUpLeft(props: SvgProps) {
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
      <Path d="M17 17L7 7M7 17V7h10" />
    </Svg>
  );
}

export default SvgArrowUpLeft;
