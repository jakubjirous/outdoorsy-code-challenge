import React from "react";
import { useSelector } from "react-redux";
import AutoSizer, { Size } from "react-virtualized-auto-sizer";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import styled from "styled-components";
import { useGetRentalQuery } from "../../redux/features/rental/rentalApi";
import { RootState } from "../../redux/store";
import Loading from "../Loading/Loading";
import NoResults from "../NoResults/NoResults";
import ListItemFactory from "./ListItemFactory";

export const LIST_ITEM_SIZE = 166;

const S = {
  Section: styled.section`
    height: 100%;
  `,
};

function List() {
  const keywords = useSelector((state: RootState) => state.search.keywords);

  // Using a query hook automatically fetches data and returns query values
  const { data: rentals, error, isLoading } = useGetRentalQuery(keywords);

  const listItems = rentals?.map((rental) => ListItemFactory({ rental }));

  const Row = React.memo((props: ListChildComponentProps) => {
    const { data, index, style } = props;
    return <div style={style}>{data.items[index]}</div>;
  });

  return (
    <S.Section>
      {!rentals && isLoading ? (
        <Loading numberOfSkeletons={4} />
      ) : rentals?.length === 0 || error ? (
        <NoResults />
      ) : (
        <AutoSizer>
          {(size: Size) => (
            <FixedSizeList
              itemSize={LIST_ITEM_SIZE}
              width={size.width}
              height={size.height}
              itemCount={listItems?.length ?? 0}
              itemData={{ items: listItems }}
            >
              {Row}
            </FixedSizeList>
          )}
        </AutoSizer>
      )}
    </S.Section>
  );
}

export default List;
