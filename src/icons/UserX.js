import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgUserX(props) {
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
      <Path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <Circle cx={8.5} cy={7} r={4} />
      <Path d="M18 8l5 5M23 8l-5 5" />
    </Svg>
  );
}

export default SvgUserX;
