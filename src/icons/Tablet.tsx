import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

function SvgTablet(props: SvgProps) {
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
      <Rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
      <Path d="M12 18h.01" />
    </Svg>
  );
}

export default SvgTablet;