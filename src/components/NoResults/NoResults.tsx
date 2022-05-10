import React from "react";
import styled from "styled-components";

const S = {
  Wrapper: styled.div`
    display: flex;
    background-color: var(--wisp);
    border-radius: var(--br);
  `,
  Paragraph: styled.p`
    padding: var(--spacing-5);
  `,
};

function NoResults() {
  return (
    <S.Wrapper>
      <S.Paragraph>
        Hmm... We don't have anything available that matches your criteria. Try adjusting your search by changing your
        keywords.
      </S.Paragraph>
    </S.Wrapper>
  );
}

export default NoResults;
