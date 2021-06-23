import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgGitMerge(props: SvgProps) {
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
      <Circle cx={18} cy={18} r={3} />
      <Circle cx={6} cy={6} r={3} />
      <Path d="M6 21V9a9 9 0 009 9" />
    </Svg>
  );
}

export default SvgGitMerge;
