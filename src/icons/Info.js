import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgInfo(props) {
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
      <Path d="M12 16v-4M12 8h.01" />
    </Svg>
  );
}

export default SvgInfo;
