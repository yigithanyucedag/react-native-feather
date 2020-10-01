import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgRewind(props) {
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
      <Path d="M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z" />
    </Svg>
  );
}

export default SvgRewind;
