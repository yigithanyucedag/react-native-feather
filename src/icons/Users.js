import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgUsers(props) {
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
      <Path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
      <Circle cx={9} cy={7} r={4} />
      <Path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
    </Svg>
  );
}

export default SvgUsers;
