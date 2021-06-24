import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgUnderline(props: SvgProps) {
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
      <Path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3M4 21h16" />
    </Svg>
  );
}

export default SvgUnderline;
