import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgGitPullRequest(props: SvgProps) {
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
      <Path d="M13 6h3a2 2 0 012 2v7M6 9v12" />
    </Svg>
  );
}

export default SvgGitPullRequest;
