import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgPrinter(props: SvgProps) {
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
      <Path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2" />
      <Path d="M6 14h12v8H6z" />
    </Svg>
  );
}

export default SvgPrinter;
