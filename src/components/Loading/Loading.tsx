import React from "react";
import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { IMAGE_HEIGHT, IMAGE_WIDTH } from "../Image/Image";
import { Skeleton } from "../Skeleton/Skeleton";

const S = {
  Wrapper: styled.div`
    display: flex;
    flex-flow: column;
    gap: var(--spacing-6);
  `,
  Skeletons: styled.div`
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: var(--spacing-5);
  `,
};

interface Props {
  numberOfSkeletons?: number;
}

function Loading({ numberOfSkeletons = 1 }: Props) {
  return (
    <S.Wrapper>
      {Array.from(Array(numberOfSkeletons).keys()).map((index) => (
        <S.Skeletons key={index}>
          <Skeleton width={pxToRem(IMAGE_WIDTH)} height={pxToRem(IMAGE_HEIGHT)} />
          <Skeleton width="50%" height="var(--fs-lg)" />
        </S.Skeletons>
      ))}
    </S.Wrapper>
  );
}

export default Loading;
