import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgCrosshair(props) {
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
      <Circle cx={12} cy={12} r={10} />
      <Path d="M22 12h-4M6 12H2M12 6V2M12 22v-4" />
    </Svg>
  );
}

export default SvgCrosshair;
