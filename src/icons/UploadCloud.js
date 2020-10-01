import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgUploadCloud(props) {
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
      <Path d="M16 16l-4-4-4 4M12 12v9" />
      <Path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
      <Path d="M16 16l-4-4-4 4" />
    </Svg>
  );
}

export default SvgUploadCloud;
