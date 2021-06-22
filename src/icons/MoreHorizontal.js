import * as React from "react";
import Svg, { Circle, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props 
 * @returns JSX.Element
 */
export const MoreHorizontal = (props) => {
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
      <Circle cx={12} cy={12} r={1} />
      <Circle cx={19} cy={12} r={1} />
      <Circle cx={5} cy={12} r={1} />
    </Svg>
  );
}

export default MoreHorizontal;
