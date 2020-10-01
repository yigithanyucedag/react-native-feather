import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPause(props) {
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
      <Path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </Svg>
  );
}

export default SvgPause;
