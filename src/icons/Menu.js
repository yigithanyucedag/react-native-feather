import * as React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props 
 * @returns JSX.Element
 */
export const Menu = (props) => {
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
      <Path d="M3 12h18M3 6h18M3 18h18" />
    </Svg>
  );
}

export default Menu;
