import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props 
 * @returns JSX.Element
 */
export const RotateCw = (props) => {
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
      <Path d="M23 4v6h-6" />
      <Path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
    </Svg>
  );
}

export default RotateCw;
