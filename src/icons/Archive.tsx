import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgArchive(props: SvgProps) {
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
      <Path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
    </Svg>
  );
}

export default SvgArchive;
