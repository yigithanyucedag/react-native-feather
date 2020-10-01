import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBatteryCharging(props) {
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
      <Path d="M5 18H3a2 2 0 01-2-2V8a2 2 0 012-2h3.19M15 6h2a2 2 0 012 2v8a2 2 0 01-2 2h-3.19M23 13v-2M11 6l-4 6h6l-4 6" />
    </Svg>
  );
}

export default SvgBatteryCharging;
