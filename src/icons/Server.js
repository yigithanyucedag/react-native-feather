import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgServer(props) {
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
      <Rect x={2} y={2} width={20} height={8} rx={2} ry={2} />
      <Rect x={2} y={14} width={20} height={8} rx={2} ry={2} />
      <Path d="M6 6h.01M6 18h.01" />
    </Svg>
  );
}

export default SvgServer;
