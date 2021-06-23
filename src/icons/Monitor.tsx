import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

function SvgMonitor(props: SvgProps) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Rect x={2} y={3} width={20} height={14} rx={2} ry={2} />
      <Path d="M8 21h8M12 17v4" />
    </Svg>
  );
}

export default SvgMonitor;
