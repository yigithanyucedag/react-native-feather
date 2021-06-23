import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

function SvgPenTool(props: SvgProps) {
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
      <Path d="M12 19l7-7 3 3-7 7-3-3z" />
      <Path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5zM2 2l7.586 7.586" />
      <Circle cx={11} cy={11} r={2} />
    </Svg>
  );
}

export default SvgPenTool;
