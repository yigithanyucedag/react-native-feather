import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

function SvgTrello(props: SvgProps) {
  return (
    <Svg
      viewBox="0 0 24 24"
      width="1em"
      height="1em"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <Path d="M7 7h3v9H7zM14 7h3v5h-3z" />
    </Svg>
  );
}

export default SvgTrello;
