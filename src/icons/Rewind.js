import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props
 * @returns JSX.Element
 */
export const Rewind = (props) => {
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
      <Path d="M11 19l-9-7 9-7v14zM22 19l-9-7 9-7v14z" />
    </Svg>
  );
};

export default Rewind;
