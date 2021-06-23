import * as React from "react";
import Svg, { Path, Circle, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props
 * @returns React.ComponentClass<SvgProps>
 */
export const Music = (props) => {
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
      <Path d="M9 18V5l12-2v13" />
      <Circle cx={6} cy={18} r={3} />
      <Circle cx={18} cy={16} r={3} />
    </Svg>
  );
};

export default Music;
