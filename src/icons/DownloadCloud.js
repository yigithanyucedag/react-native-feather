import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgDownloadCloud(props) {
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
      <Path d="M8 17l4 4 4-4M12 12v9" />
      <Path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29" />
    </Svg>
  );
}

export default SvgDownloadCloud;
