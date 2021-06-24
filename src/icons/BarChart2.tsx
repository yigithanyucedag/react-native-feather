import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgBarChart2(props: SvgProps) {
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
      <Path d="M18 20V10M12 20V4M6 20v-6" />
    </Svg>
  );
}

export default SvgBarChart2;
