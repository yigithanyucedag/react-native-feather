import * as React from "react";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props 
 * @returns JSX.Element
 */
export const Calendar = (props) => {
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
      <Rect x={3} y={4} width={18} height={18} rx={2} ry={2} />
      <Path d="M16 2v4M8 2v4M3 10h18" />
    </Svg>
  );
}

export default Calendar;
