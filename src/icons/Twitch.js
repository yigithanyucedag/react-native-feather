import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgTwitch(props) {
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
      <Path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7" />
    </Svg>
  );
}

export default SvgTwitch;
