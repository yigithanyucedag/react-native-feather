import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCrop(props) {
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
      <Path d="M6.13 1L6 16a2 2 0 002 2h15" />
      <Path d="M1 6.13L16 6a2 2 0 012 2v15" />
    </Svg>
  );
}

export default SvgCrop;
