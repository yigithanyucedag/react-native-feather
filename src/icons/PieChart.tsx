import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgPieChart(props: SvgProps) {
  return (
    <Svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <Path d="M21.21 15.89A10 10 0 118 2.83M22 12A10 10 0 0012 2v10z" />
    </Svg>
  );
}

export default SvgPieChart;
