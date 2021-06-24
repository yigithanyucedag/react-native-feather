import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgMeh(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M8 15h8M9 9h.01M15 9h.01" />
    </Svg>
  );
}

export default SvgMeh;