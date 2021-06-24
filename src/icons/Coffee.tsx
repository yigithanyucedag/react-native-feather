import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgCoffee(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3M10 1v3M14 1v3" />
    </Svg>
  );
}

export default SvgCoffee;
