import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgNavigation2(props) {
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
      <Path d="M12 2l7 19-7-4-7 4 7-19z" />
    </Svg>
  );
}

export default SvgNavigation2;
