import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgBook(props: SvgProps) {
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
      <Path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
      <Path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
    </Svg>
  );
}

export default SvgBook;
