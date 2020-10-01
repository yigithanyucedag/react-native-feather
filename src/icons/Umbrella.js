import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUmbrella(props) {
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
      <Path d="M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7" />
    </Svg>
  );
}

export default SvgUmbrella;
