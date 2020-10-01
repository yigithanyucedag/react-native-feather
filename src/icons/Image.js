import * as React from "react";
import Svg, { Rect, Circle, Path } from "react-native-svg";

function SvgImage(props) {
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
      <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <Circle cx={8.5} cy={8.5} r={1.5} />
      <Path d="M21 15l-5-5L5 21" />
    </Svg>
  );
}

export default SvgImage;
