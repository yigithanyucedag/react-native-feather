import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgArrowDownCircle(props) {
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
      <Path d="M8 12l4 4 4-4M12 8v8" />
    </Svg>
  );
}

export default SvgArrowDownCircle;
