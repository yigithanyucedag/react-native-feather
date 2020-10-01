import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMousePointer(props) {
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
      <Path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3zM13 13l6 6" />
    </Svg>
  );
}

export default SvgMousePointer;
