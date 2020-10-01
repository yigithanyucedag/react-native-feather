import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgTablet(props) {
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
      <Rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
      <Path d="M12 18h.01" />
    </Svg>
  );
}

export default SvgTablet;
