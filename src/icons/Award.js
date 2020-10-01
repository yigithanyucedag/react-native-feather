import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgAward(props) {
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
      <Circle cx={12} cy={8} r={7} />
      <Path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" />
    </Svg>
  );
}

export default SvgAward;
