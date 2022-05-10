import React from "react";
import styled from "styled-components";
import { Rental } from "../../redux/features/rental/rentalApi";

const S = {
  Container: styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-start;
    align-content: center;
    gap: var(--spacing-5);
  `,
  Name: styled.div`
    flex: 1;
    align-self: center;
    font-size: var(--fs-md);
    line-height: var(--lh-md);
  `,
};

interface Props {
  rental: Rental;
}

// TODO: image rendering (Jakub Jirous 2022-05-10 16:15:30)
// TODO: unit test (Jakub Jirous 2022-05-10 16:16:20)
function ListItemFactory({ rental }: Props) {
  const { id, name, imageUrl } = rental;

  return (
    <S.Container key={id}>
      Image
      <S.Name>{name}</S.Name>
    </S.Container>
  );
}

export default ListItemFactory;
