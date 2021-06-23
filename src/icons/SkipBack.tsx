import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgSkipBack(props: SvgProps) {
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
      <Path d="M19 20L9 12l10-8v16zM5 19V5" />
    </Svg>
  );
}

export default SvgSkipBack;
