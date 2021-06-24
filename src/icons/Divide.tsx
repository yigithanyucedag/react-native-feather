import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgDivide(props: SvgProps) {
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
      <Circle cx={12} cy={6} r={2} />
      <Path d="M5 12h14" />
      <Circle cx={12} cy={18} r={2} />
    </Svg>
  );
}

export default SvgDivide;
