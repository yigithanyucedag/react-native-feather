import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgUmbrella(props: SvgProps) {
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
      <Path d="M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7" />
    </Svg>
  );
}

export default SvgUmbrella;
