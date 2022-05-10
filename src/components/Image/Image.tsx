import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";
import { Skeleton } from "../Skeleton/Skeleton";

export const IMAGE_WIDTH = 180;
export const IMAGE_HEIGHT = 135;

const S = {
  Wrapper: styled.div`
    position: relative;
  `,
  Figure: styled.figure``,
  Image: styled.img`
    border-radius: var(--br);
    width: ${pxToRem(IMAGE_WIDTH)};
    height: ${pxToRem(IMAGE_HEIGHT)};
    object-fit: cover;
    object-position: center;
  `,
  Skeleton: styled(Skeleton)`
    position: absolute;
  `,
};

interface Props {
  src: string;
  alt: string;
}

function Image({ src, alt }: Props) {
  const [loading, setLoading] = useState<boolean>(true);

  const onLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <S.Wrapper>
      {loading && (
        <S.Skeleton width={pxToRem(IMAGE_WIDTH)} height={pxToRem(IMAGE_HEIGHT)} data-testid="image-skeleton" />
      )}

      <S.Figure>
        <S.Image src={src} alt={alt} aria-label={alt} onLoad={onLoad} onError={onLoad} />
      </S.Figure>
    </S.Wrapper>
  );
}

export default Image;
