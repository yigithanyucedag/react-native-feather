import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgAtSign(props) {
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
      <Circle cx={12} cy={12} r={4} />
      <Path d="M16 8v5a3 3 0 006 0v-1a10 10 0 10-3.92 7.94" />
    </Svg>
  );
}

export default SvgAtSign;
