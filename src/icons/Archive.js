import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgArchive(props) {
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
      <Path d="M21 8v13H3V8M1 3h22v5H1zM10 12h4" />
    </Svg>
  );
}

export default SvgArchive;
