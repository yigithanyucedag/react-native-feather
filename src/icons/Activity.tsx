import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgActivity(props: SvgProps) {
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
      <Path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </Svg>
  );
}

export default SvgActivity;
