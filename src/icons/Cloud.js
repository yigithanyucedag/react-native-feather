import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCloud(props) {
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
      <Path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
    </Svg>
  );
}

export default SvgCloud;
