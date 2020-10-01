import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";

function SvgRss(props) {
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
      <Path d="M4 11a9 9 0 019 9M4 4a16 16 0 0116 16" />
      <Circle cx={5} cy={19} r={1} />
    </Svg>
  );
}

export default SvgRss;
