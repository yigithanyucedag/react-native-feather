import * as React from "react";
import Svg, { SvgProps, Path, Rect } from "react-native-svg";

function SvgVideo(props: SvgProps) {
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
      <Path d="M23 7l-7 5 7 5V7z" />
      <Rect x={1} y={5} width={15} height={14} rx={2} ry={2} />
    </Svg>
  );
}

export default SvgVideo;
