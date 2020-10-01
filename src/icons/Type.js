import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgType(props) {
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
      <Path d="M4 7V4h16v3M9 20h6M12 4v16" />
    </Svg>
  );
}

export default SvgType;
