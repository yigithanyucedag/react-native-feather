import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgMeh(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className=""
      {...props}
    >
      <Circle cx={12} cy={12} r={10} />
      <Path d="M8 15h8M9 9h.01M15 9h.01" />
    </Svg>
  );
}

export default SvgMeh;
