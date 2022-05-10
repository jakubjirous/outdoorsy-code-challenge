import { createGlobalStyle } from "styled-components";
import { Palette } from "./Palette";
import { Reset } from "./Reset";
import { Typography } from "./Typography";
import { Variables } from "./Variables";

export const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Variables}
  ${Palette}
  ${Typography}
`;
