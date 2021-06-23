import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgArrowDownLeft(props: SvgProps) {
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
      <Path d="M17 7L7 17M17 17H7V7" />
    </Svg>
  );
}

export default SvgArrowDownLeft;
