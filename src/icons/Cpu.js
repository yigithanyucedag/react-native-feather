import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgCpu(props) {
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
      <Rect x={4} y={4} width={16} height={16} rx={2} ry={2} />
      <Path d="M9 9h6v6H9zM9 1v3M15 1v3M9 20v3M15 20v3M20 9h3M20 14h3M1 9h3M1 14h3" />
    </Svg>
  );
}

export default SvgCpu;
