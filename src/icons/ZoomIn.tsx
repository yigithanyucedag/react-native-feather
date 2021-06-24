import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgZoomIn(props: SvgProps) {
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
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
    </Svg>
  );
}

export default SvgZoomIn;
