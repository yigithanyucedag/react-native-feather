import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgAlignCenter(props: SvgProps) {
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
      <Path d="M18 10H6M21 6H3M21 14H3M18 18H6" />
    </Svg>
  );
}

export default SvgAlignCenter;
