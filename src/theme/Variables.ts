import { css } from "styled-components";
import { pxToRem } from "../utils/pxToRem";

export const Variables = css`
  :root {
    // Spacing
    --spacing-1: ${pxToRem(1)};
    --spacing-2: ${pxToRem(2)};
    --spacing-3: ${pxToRem(4)};
    --spacing-4: ${pxToRem(8)};
    --spacing-5: ${pxToRem(16)};
    --spacing-6: ${pxToRem(32)};
    --spacing-7: ${pxToRem(64)};
  }
`;
