import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgSlash(props: SvgProps) {
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
      <Circle cx={12} cy={12} r={10} />
      <Path d="M4.93 4.93l14.14 14.14" />
    </Svg>
  );
}

export default SvgSlash;