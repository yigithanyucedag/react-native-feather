import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUnderline(props) {
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
      <Path d="M6 3v7a6 6 0 006 6 6 6 0 006-6V3M4 21h16" />
    </Svg>
  );
}

export default SvgUnderline;
