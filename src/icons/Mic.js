import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgMic(props) {
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
      <Path d="M12 1a3 3 0 00-3 3v8a3 3 0 006 0V4a3 3 0 00-3-3z" />
      <Path d="M19 10v2a7 7 0 01-14 0v-2M12 19v4M8 23h8" />
    </Svg>
  );
}

export default SvgMic;
