import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgX(props: SvgProps) {
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
      <Path d="M18 6L6 18M6 6l12 12" />
    </Svg>
  );
}

export default SvgX;
