import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgAirplay(props) {
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
      <Path d="M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1" />
      <Path d="M12 15l5 6H7l5-6z" />
    </Svg>
  );
}

export default SvgAirplay;
