import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgFilePlus(props) {
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
      <Path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <Path d="M14 2v6h6M12 18v-6M9 15h6" />
    </Svg>
  );
}

export default SvgFilePlus;
