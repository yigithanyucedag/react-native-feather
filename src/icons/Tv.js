import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgTv(props) {
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
      <Rect x={2} y={7} width={20} height={15} rx={2} ry={2} />
      <Path d="M17 2l-5 5-5-5" />
    </Svg>
  );
}

export default SvgTv;
