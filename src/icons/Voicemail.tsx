import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

function SvgVoicemail(props: SvgProps) {
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
      <Circle cx={5.5} cy={11.5} r={4.5} />
      <Circle cx={18.5} cy={11.5} r={4.5} />
      <Path d="M5.5 16h13" />
    </Svg>
  );
}

export default SvgVoicemail;
