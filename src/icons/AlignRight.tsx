import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgAlignRight(props: SvgProps) {
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
      <Path d="M21 10H7M21 6H3M21 14H3M21 18H7" />
    </Svg>
  );
}

export default SvgAlignRight;
