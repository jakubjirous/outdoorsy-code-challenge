import { css } from "styled-components";
import { pxToRem } from "../utils/pxToRem";

export const Typography = css`
  :root {
    // Font Size
    --fs: ${pxToRem(14)}
    --fs-md: ${pxToRem(16)}
    --fs-lg: ${pxToRem(18)}
    --fs-xl: ${pxToRem(20)}
    
    // Line Height
    --lh: ${pxToRem(20)}
    --lh-md: ${pxToRem(22)}
    --lh-lg: ${pxToRem(24)}
    --lh-xl: ${pxToRem(28)}
    
    // Font Weight
    --fw-light: 400;
    --fw-regular: 500;
    --fw-semi: 700;
    --fw-bold: 900;
    
    // Border Radius
    --br: ${pxToRem(8)}
  }
`;
