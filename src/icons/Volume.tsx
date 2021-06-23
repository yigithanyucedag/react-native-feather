import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgVolume(props: SvgProps) {
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
      <Path d="M11 5L6 9H2v6h4l5 4V5z" />
    </Svg>
  );
}

export default SvgVolume;
