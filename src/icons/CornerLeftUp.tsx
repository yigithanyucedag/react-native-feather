import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgCornerLeftUp(props: SvgProps) {
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
      <Path d="M14 9L9 4 4 9" />
      <Path d="M20 20h-7a4 4 0 01-4-4V4" />
    </Svg>
  );
}

export default SvgCornerLeftUp;
