import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgRewind(props: SvgProps) {
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
      <Path d="M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z" />
    </Svg>
  );
}

export default SvgRewind;
