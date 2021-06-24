import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgAward(props: SvgProps) {
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
      <Circle cx={12} cy={8} r={7} />
      <Path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </Svg>
  );
}

export default SvgAward;
