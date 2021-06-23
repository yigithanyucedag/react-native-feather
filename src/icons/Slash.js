import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props
 * @returns JSX.Element
 */
export const Slash = (props) => {
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
      <Circle cx={12} cy={12} r={10} />
      <Path d="M4.93 4.93l14.14 14.14" />
    </Svg>
  );
};

export default Slash;
