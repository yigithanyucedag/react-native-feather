import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props
 * @returns React.ComponentClass<SvgProps>
 */
export const Zap = (props) => {
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
      <Path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
    </Svg>
  );
};

export default Zap;
