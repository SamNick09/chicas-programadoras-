import * as React from "react";
import Svg, { Path } from "react-native-svg";

const FlechaIzquierdaVentura = (props) => (
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
      d="M12.5 3.333 5.833 10l6.667 6.667"
    />
  </Svg>
);
export default FlechaIzquierdaVentura;
