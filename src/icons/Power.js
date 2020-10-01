import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPower(props) {
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
      <Path d="M18.36 6.64a9 9 0 11-12.73 0M12 2v10" />
    </Svg>
  );
}

export default SvgPower;
