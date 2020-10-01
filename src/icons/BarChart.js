import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgBarChart(props) {
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
      <Path d="M12 20V10M18 20V4M6 20v-4" />
    </Svg>
  );
}

export default SvgBarChart;
