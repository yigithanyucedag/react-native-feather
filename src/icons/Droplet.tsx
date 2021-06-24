import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgDroplet(props: SvgProps) {
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
      <Path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </Svg>
  );
}

export default SvgDroplet;
