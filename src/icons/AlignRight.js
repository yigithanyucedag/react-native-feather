import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAlignRight(props) {
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
      <Path d="M21 10H7M21 6H3M21 14H3M21 18H7" />
    </Svg>
  );
}

export default SvgAlignRight;
