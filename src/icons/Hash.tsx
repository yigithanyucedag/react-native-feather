import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgHash(props: SvgProps) {
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
      <Path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" />
    </Svg>
  );
}

export default SvgHash;
