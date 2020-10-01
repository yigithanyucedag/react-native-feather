import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgInstagram(props) {
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
      <Rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
      <Path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zM17.5 6.5h.01" />
    </Svg>
  );
}

export default SvgInstagram;
