import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";

function SvgCreditCard(props: SvgProps) {
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
      <Rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
      <Path d="M1 10h22" />
    </Svg>
  );
}

export default SvgCreditCard;
