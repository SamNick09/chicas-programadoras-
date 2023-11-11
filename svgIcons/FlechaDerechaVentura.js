import * as React from "react";
import Svg, { Path } from "react-native-svg";
const FlechaDerechaVentura = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.167}
      d="M6.667 3.333 13.333 10l-6.666 6.667"
    />
  </Svg>
);
export default FlechaDerechaVentura;
