import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgShare2(props: SvgProps) {
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
      <Circle cx={18} cy={5} r={3} />
      <Circle cx={6} cy={12} r={3} />
      <Circle cx={18} cy={19} r={3} />
      <Path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" />
    </Svg>
  );
}

export default SvgShare2;
