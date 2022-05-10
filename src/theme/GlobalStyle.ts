import { createGlobalStyle } from "styled-components";
import { Base } from "./Base";
import { Palette } from "./Palette";
import { Reset } from "./Reset";
import { Typography } from "./Typography";
import { Variables } from "./Variables";

export const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Variables}
  ${Palette}
  ${Typography}
  ${Base}
`;
