import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgNavigation2(props: SvgProps) {
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
      <Path d="M12 2l7 19-7-4-7 4 7-19z" />
    </Svg>
  );
}

export default SvgNavigation2;
