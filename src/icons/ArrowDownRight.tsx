import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgArrowDownRight(props: SvgProps) {
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
      <Path d="M7 7l10 10M17 7v10H7" />
    </Svg>
  );
}

export default SvgArrowDownRight;
