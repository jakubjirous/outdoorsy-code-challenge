import React from "react";
import styled from "styled-components";
import { deviceScreen, laptopMd, tablet } from "../../utils/responsive";
import Search from "../Search/Search";

const S = {
  Main: styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-flow: column;
    margin: auto;

    @media screen and ${deviceScreen.tablet} {
      max-width: ${tablet}px;
    }

    @media screen and ${deviceScreen.laptopLg} {
      max-width: ${laptopMd}px;
    }
  `,
  Container: styled.div`
    flex: 1;
    display: flex;
    flex-flow: column;
    gap: var(--spacing-6);
    margin: var(--spacing-5);
  `,
};

function App() {
  return (
    <S.Main>
      <S.Container>
        <Search />
        List <br />
      </S.Container>
    </S.Main>
  );
}

export default App;
