import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgXOctagon(props) {
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
      <Path d="M7.86 2h8.28L22 7.86v8.28L16.14 22H7.86L2 16.14V7.86L7.86 2zM15 9l-6 6M9 9l6 6" />
    </Svg>
  );
}

export default SvgXOctagon;
