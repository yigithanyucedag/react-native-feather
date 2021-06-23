import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgSave(props: SvgProps) {
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
      <Path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
      <Path d="M17 21v-8H7v8M7 3v5h8" />
    </Svg>
  );
}

export default SvgSave;
