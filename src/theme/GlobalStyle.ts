import { createGlobalStyle } from "styled-components";
import { Reset } from "./Reset";
import { Variables } from "./Variables";

export const GlobalStyles = createGlobalStyle`
  ${Reset}
  ${Variables}
`;
