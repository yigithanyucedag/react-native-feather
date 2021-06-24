import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgPlay(props: SvgProps) {
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
      <Path d="M5 3l14 9-14 9V3z" />
    </Svg>
  );
}

export default SvgPlay;