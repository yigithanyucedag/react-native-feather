import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

function SvgTruck(props: SvgProps) {
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
      <Path d="M1 3h15v13H1zM16 8h4l3 3v5h-7V8z" />
      <Circle cx={5.5} cy={18.5} r={2.5} />
      <Circle cx={18.5} cy={18.5} r={2.5} />
    </Svg>
  );
}

export default SvgTruck;
