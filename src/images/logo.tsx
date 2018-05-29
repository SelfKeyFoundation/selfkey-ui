import * as React from "react";
import { SFC } from "react";

import * as logoImage from "../assets/selfkey.svg";

export type LogoProps = {
  width?: number;
  height?: number;
};

export const Logo: SFC<LogoProps> = props => (
  <img src={logoImage} width={props.width || 57} height={props.height || 65} />
);
