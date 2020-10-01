import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgPieChart(props) {
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
      <Path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
    </Svg>
  );
}

export default SvgPieChart;
