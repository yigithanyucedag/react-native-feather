import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgPlus(props: SvgProps) {
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
      <Path d="M12 5v14M5 12h14" />
    </Svg>
  );
}

export default SvgPlus;
