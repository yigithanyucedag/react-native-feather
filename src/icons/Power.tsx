import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgPower(props: SvgProps) {
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
      <Path d="M18.36 6.64a9 9 0 11-12.73 0M12 2v10" />
    </Svg>
  );
}

export default SvgPower;
