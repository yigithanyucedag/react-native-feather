import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgMonitor(props) {
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
      <Rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
      <Path d="M8 21h8M12 17v4" />
    </Svg>
  );
}

export default SvgMonitor;
