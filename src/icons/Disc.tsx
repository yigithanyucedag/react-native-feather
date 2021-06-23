import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";

function SvgDisc(props: SvgProps) {
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
      <Circle cx={12} cy={12} r={10} />
      <Circle cx={12} cy={12} r={3} />
    </Svg>
  );
}

export default SvgDisc;
