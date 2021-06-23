import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgMenu(props: SvgProps) {
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
      <Path d="M3 12h18M3 6h18M3 18h18" />
    </Svg>
  );
}

export default SvgMenu;
