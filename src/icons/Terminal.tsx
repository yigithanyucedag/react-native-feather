import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgTerminal(props: SvgProps) {
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
      <Path d="M4 17l6-6-6-6M12 19h8" />
    </Svg>
  );
}

export default SvgTerminal;
