import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

function SvgClipboard(props: SvgProps) {
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
      <Path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2" />
      <Rect x={8} y={2} width={8} height={4} rx={1} ry={1} />
    </Svg>
  );
}

export default SvgClipboard;
