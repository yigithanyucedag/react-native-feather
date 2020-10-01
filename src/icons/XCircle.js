import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgXCircle(props) {
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
      <Circle cx={12} cy={12} r={10} />
      <Path d="M15 9l-6 6M9 9l6 6" />
    </Svg>
  );
}

export default SvgXCircle;
