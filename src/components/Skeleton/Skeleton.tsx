import styled, { keyframes } from "styled-components";

const skeletonKeyframes = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: calc(200px + 100%) 0;
  }
`;

export const Skeleton = styled.div<{ height?: string; width?: string; marginTop?: string; marginBottom?: string }>`
  display: inline-block;
  height: ${(props) => props.height ?? "var(--spacing-6)"};
  width: ${(props) => props.width ?? "100%"};
  animation: ${skeletonKeyframes} 1300ms ease-in-out infinite;
  background-color: var(--color-tertiary);
  background-image: linear-gradient(90deg, var(--color-tertiary), var(--color-secondary), var(--color-tertiary));
  background-size: 200px 100%;
  background-repeat: no-repeat;
  border-radius: var(--br);
  margin-top: ${(props) => props.marginTop ?? "0"};
  margin-bottom: ${(props) => props.marginBottom ?? "0"};
`;
