import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgAlignLeft(props: SvgProps) {
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
      <Path d="M17 10H3M21 6H3M21 14H3M17 18H3" />
    </Svg>
  );
}

export default SvgAlignLeft;
