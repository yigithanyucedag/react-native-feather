import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgTrendingDown(props: SvgProps) {
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
      <Path d="M23 18l-9.5-9.5-5 5L1 6" />
      <Path d="M17 18h6v-6" />
    </Svg>
  );
}

export default SvgTrendingDown;
