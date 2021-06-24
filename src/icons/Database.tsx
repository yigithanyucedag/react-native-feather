import * as React from "react";
import Svg, { SvgProps, Ellipse, Path } from "react-native-svg";

function SvgDatabase(props: SvgProps) {
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
      <Ellipse cx={12} cy={5} rx={9} ry={3} />
      <Path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <Path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </Svg>
  );
}

export default SvgDatabase;
