import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

function SvgRss(props: SvgProps) {
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
      <Path d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16" />
      <Circle cx={5} cy={19} r={1} />
    </Svg>
  );
}

export default SvgRss;