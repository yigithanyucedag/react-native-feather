import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgAtSign(props: SvgProps) {
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
      <Circle cx={12} cy={12} r={4} />
      <Path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" />
    </Svg>
  );
}

export default SvgAtSign;
