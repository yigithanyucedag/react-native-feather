import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgGitBranch(props) {
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
      <Path d="M6 3v12" />
      <Circle cx={18} cy={6} r={3} />
      <Circle cx={6} cy={18} r={3} />
      <Path d="M18 9a9 9 0 01-9 9" />
    </Svg>
  );
}

export default SvgGitBranch;
