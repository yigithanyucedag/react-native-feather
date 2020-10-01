import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgCopy(props) {
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
      <Rect x={9} y={9} width={13} height={13} rx={2} ry={2} />
      <Path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </Svg>
  );
}

export default SvgCopy;
