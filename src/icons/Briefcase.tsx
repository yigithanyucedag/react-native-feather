import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

function SvgBriefcase(props: SvgProps) {
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
      <Rect x={2} y={7} width={20} height={14} rx={2} ry={2} />
      <Path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </Svg>
  );
}

export default SvgBriefcase;
