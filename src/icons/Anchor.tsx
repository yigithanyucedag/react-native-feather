import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgAnchor(props: SvgProps) {
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
      <Circle cx={12} cy={5} r={3} />
      <Path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
    </Svg>
  );
}

export default SvgAnchor;
