import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgFilm(props) {
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
      <Rect x={2} y={2} width={20} height={20} rx={2.18} ry={2.18} />
      <Path d="M7 2v20M17 2v20M2 12h20M2 7h5M2 17h5M17 17h5M17 7h5" />
    </Svg>
  );
}

export default SvgFilm;
