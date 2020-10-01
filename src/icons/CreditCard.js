import * as React from "react";
import Svg, { Rect, Path } from "react-native-svg";

function SvgCreditCard(props) {
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
      <Rect x={1} y={4} width={22} height={16} rx={2} ry={2} />
      <Path d="M1 10h22" />
    </Svg>
  );
}

export default SvgCreditCard;
