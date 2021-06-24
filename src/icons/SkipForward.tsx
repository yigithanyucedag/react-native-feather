import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgSkipForward(props: SvgProps) {
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
      <Path d="M5 4l10 8-10 8V4zM19 5v14" />
    </Svg>
  );
}

export default SvgSkipForward;
