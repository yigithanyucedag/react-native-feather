import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

function SvgDivideCircle(props: SvgProps) {
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
      <Path d="M8 12h8M12 16h0M12 8h0" />
      <Circle cx={12} cy={12} r={10} />
    </Svg>
  );
}

export default SvgDivideCircle;
