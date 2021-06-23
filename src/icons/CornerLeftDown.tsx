import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgCornerLeftDown(props: SvgProps) {
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
      <Path d="M14 15l-5 5-5-5" />
      <Path d="M20 4h-7a4 4 0 00-4 4v12" />
    </Svg>
  );
}

export default SvgCornerLeftDown;
