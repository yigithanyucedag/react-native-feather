import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCornerLeftUp(props) {
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
      <Path d="M14 9L9 4 4 9" />
      <Path d="M20 20h-7a4 4 0 01-4-4V4" />
    </Svg>
  );
}

export default SvgCornerLeftUp;
