import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgArrowDown(props: SvgProps) {
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
      <Path d="M12 5v14M19 12l-7 7-7-7" />
    </Svg>
  );
}

export default SvgArrowDown;
