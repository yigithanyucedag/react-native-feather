import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignCenter(props) {
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
      <Path d="M18 10H6M21 6H3M21 14H3M18 18H6" />
    </Svg>
  );
}

export default SvgAlignCenter;
