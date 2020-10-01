import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgHash(props) {
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
      <Path d="M4 9h16M4 15h16M10 3L8 21M16 3l-2 18" />
    </Svg>
  );
}

export default SvgHash;
