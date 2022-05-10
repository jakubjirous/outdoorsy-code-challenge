import { css } from "styled-components";

export const Base = css`
  body {
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji,
      Segoe UI Emoji;
    font-size: var(--fs);
    line-height: var(--ln);
    color: var(--black);
  }

  // Scroll Bar Tuning
  &::-webkit-scrollbar {
    width: var(--spacing-4);
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-tertiary);
    border-radius: var(--br);
  }
`;
