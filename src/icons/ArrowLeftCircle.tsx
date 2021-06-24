import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgArrowLeftCircle(props: SvgProps) {
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
      <Path d="M12 8l-4 4 4 4M16 12H8" />
    </Svg>
  );
}

export default SvgArrowLeftCircle;
