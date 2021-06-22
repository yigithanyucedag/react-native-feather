import * as React from "react";
import Svg, { Path, Circle, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props 
 * @returns JSX.Element
 */
export const Percent = (props) => {
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
      <Path d="M19 5L5 19" />
      <Circle cx={6.5} cy={6.5} r={2.5} />
      <Circle cx={17.5} cy={17.5} r={2.5} />
    </Svg>
  );
}

export default Percent;
