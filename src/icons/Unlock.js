import * as React from "react";
import Svg, { Rect, Path, SvgProps } from "react-native-svg";

/**
 * @param {SvgProps} props
 * @returns React.ComponentClass<SvgProps>
 */
export const Unlock = (props) => {
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
      <Rect x={3} y={11} width={18} height={11} rx={2} ry={2} />
      <Path d="M7 11V7a5 5 0 019.9-1" />
    </Svg>
  );
};

export default Unlock;
