/**
 * Breakpoints represent the min-width for each size variant
 */
const mobileSm = 320;
const mobileMd = 375;
const mobileLg = 425;
const tablet = 768;
const laptopMd = 1024;
const laptopLg = 1440;
const desktop = 2560;

/**
 * Styled components @media breakpoint
 */
export const deviceScreen = {
  mobileSm: `(min-width: ${mobileSm}px)`,
  mobileMd: `(min-width: ${mobileMd}px)`,
  mobileLg: `(min-width: ${mobileLg}px)`,
  tablet: `(min-width: ${tablet}px)`,
  laptopMd: `(min-width: ${laptopMd}px)`,
  laptopLg: `(min-width: ${laptopLg}px)`,
  desktop: `(min-width: ${desktop}px)`,
};

export { mobileSm, mobileMd, mobileLg, tablet, laptopMd, laptopLg, desktop };
