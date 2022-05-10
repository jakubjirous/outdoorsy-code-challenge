import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { pxToRem } from "../../utils/pxToRem";

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
};

interface Props {
  src: string;
  alt: string;
}

// TODO: unit test (Jakub Jirous 2022-05-10 16:17:49)
// TODO: skeleton (Jakub Jirous 2022-05-10 16:17:51)
function Image({ src, alt }: Props) {
  const [loading, setLoading] = useState<boolean>(true);

  const onLoad = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <S.Wrapper>
      {loading && <>Loading ...</>}

      <S.Figure>
        <S.Image src={src} alt={alt} aria-label={alt} onLoad={onLoad} onError={onLoad} />
      </S.Figure>
    </S.Wrapper>
  );
}

export default Image;
