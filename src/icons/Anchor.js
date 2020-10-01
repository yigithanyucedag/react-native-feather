import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function SvgAnchor(props) {
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
      <Circle cx={12} cy={5} r={3} />
      <Path d="M12 22V8M5 12H2a10 10 0 0020 0h-3" />
    </Svg>
  );
}

export default SvgAnchor;
