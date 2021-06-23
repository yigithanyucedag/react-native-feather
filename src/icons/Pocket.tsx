import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgPocket(props: SvgProps) {
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
      <Path d="M4 3h16a2 2 0 012 2v6a10 10 0 01-10 10A10 10 0 012 11V5a2 2 0 012-2z" />
      <Path d="M8 10l4 4 4-4" />
    </Svg>
  );
}

export default SvgPocket;
