import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgArrowRightCircle(props: SvgProps) {
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
      <Circle cx={12} cy={12} r={10} />
      <Path d="M12 16l4-4-4-4M8 12h8" />
    </Svg>
  );
}

export default SvgArrowRightCircle;
