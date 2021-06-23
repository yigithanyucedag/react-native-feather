import * as React from "react";
import Svg, { Circle, Path, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props
 * @returns JSX.Element
 */
export const Voicemail = (props) => {
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
      <Circle cx={5.5} cy={11.5} r={4.5} />
      <Circle cx={18.5} cy={11.5} r={4.5} />
      <Path d="M5.5 16h13" />
    </Svg>
  );
};

export default Voicemail;
