import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgZoomIn(props) {
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
      <Circle cx={11} cy={11} r={8} />
      <Path d="M21 21l-4.35-4.35M11 8v6M8 11h6" />
    </Svg>
  );
}

export default SvgZoomIn;
