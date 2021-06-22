import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props 
 * @returns JSX.Element
 */
export const CheckSquare = (props) => {
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
      <Path d="M9 11l3 3L22 4" />
      <Path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
    </Svg>
  );
}

export default CheckSquare;
