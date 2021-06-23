import * as React from "react";
import Svg, { SvgProps, Circle } from "react-native-svg";

function SvgMoreVertical(props: SvgProps) {
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
      <Circle cx={12} cy={12} r={1} />
      <Circle cx={12} cy={5} r={1} />
      <Circle cx={12} cy={19} r={1} />
    </Svg>
  );
}

export default SvgMoreVertical;
