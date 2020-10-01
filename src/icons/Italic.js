import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgItalic(props) {
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
      <Path d="M19 4h-9M14 20H5M15 4L9 20" />
    </Svg>
  );
}

export default SvgItalic;
