import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgGitCommit(props) {
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
      <Circle cx={12} cy={12} r={4} />
      <Path d="M1.05 12H7M17.01 12h5.95" />
    </Svg>
  );
}

export default SvgGitCommit;
