import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDroplet(props) {
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
      <Path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
    </Svg>
  );
}

export default SvgDroplet;
