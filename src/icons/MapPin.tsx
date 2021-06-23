import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

function SvgMapPin(props: SvgProps) {
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
      <Path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
      <Circle cx={12} cy={10} r={3} />
    </Svg>
  );
}

export default SvgMapPin;
