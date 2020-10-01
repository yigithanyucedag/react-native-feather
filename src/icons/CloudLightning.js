import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgCloudLightning(props) {
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
      <Path d="M19 16.9A5 5 0 0018 7h-1.26a8 8 0 10-11.62 9" />
      <Path d="M13 11l-4 6h6l-4 6" />
    </Svg>
  );
}

export default SvgCloudLightning;
