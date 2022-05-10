import React, { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addKeyword, addKeywords, removeKeyword } from "../../redux/features/search/searchSlice";
import { RootState } from "../../redux/store";
import { KeyboardKey } from "../../utils/keyboardKey";
import { pxToRem } from "../../utils/pxToRem";
import { FaTimes } from "react-icons/fa";

const S = {
  Header: styled.header`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: var(--spacing-4);
    border: 1px solid var(--color-tertiary);
    border-radius: var(--br);
    padding: var(--spacing-4);
  `,
  Keywords: styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    gap: var(--spacing-4);
  `,
  Keyword: styled.div`
    display: flex;
    align-items: center;
    gap: var(--spacing-3);
    border: 1px solid var(--color-primary);
    border-radius: var(--br);
    background-color: var(--color-primary);
    color: var(--white);
    padding: var(--spacing-3);
    padding-left: var(--spacing-4);
  `,
  Input: styled.input`
    min-width: 25%;
    flex: 1;
    border: none;
    border-radius: var(--br);
    outline: none;
    height: ${pxToRem(30)};
  `,
  RemoveButton: styled.button`
    display: flex;
    align-items: center;
    padding: 0;
    border: none;
    background-color: unset;
    cursor: pointer;
    color: white;
  `,
  RemoveIcon: styled(FaTimes)`
    color: var(--white);
    font-size: ${pxToRem(16)};
  `,
};

function Search() {
  const dispatch = useDispatch();

  const keywords = useSelector((state: RootState) => state.search.keywords);

  const [input, setInput] = useState<string>("");

  const [isKeyReleased, setIsKeyReleased] = useState<boolean>(false);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = event;
      const trimmedInput = input?.trim();

      // Keywords separation and search submit after hitting the comma on the keyboard
      if (
        (key === KeyboardKey.COMMA || key === KeyboardKey.ENTER) &&
        trimmedInput?.length &&
        !keywords.includes(trimmedInput)
      ) {
        event.preventDefault();
        dispatch(addKeyword(trimmedInput));
        setInput("");
      }

      // Prevent unintentional deletion of all keywords in the input
      if (key === KeyboardKey.BACKSPACE && !input?.length && keywords.length && isKeyReleased) {
        event.preventDefault();
        const keywordsCopy = [...keywords];
        const poppedKeyword = keywordsCopy.pop();
        dispatch(addKeywords(keywordsCopy));
        setInput(poppedKeyword!);
      }

      setIsKeyReleased(false);
    },
    [input, setInput, dispatch, isKeyReleased, setIsKeyReleased]
  );

  const onKeyUp = useCallback(() => {
    setIsKeyReleased(true);
  }, [setIsKeyReleased]);

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      setInput(value);
    },
    [input, setInput]
  );

  const onRemove = useCallback(
    (index: number) => () => {
      dispatch(removeKeyword(index));
    },
    [dispatch, removeKeyword]
  );

  return (
    <S.Header>
      <S.Keywords>
        {keywords.map((keyword, index) => (
          <S.Keyword key={index} className="keyword">
            {keyword}
            <S.RemoveButton onClick={onRemove(index)}>
              <S.RemoveIcon />
            </S.RemoveButton>
          </S.Keyword>
        ))}
      </S.Keywords>
      <S.Input
        value={input}
        placeholder="Find the perfect RV"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        onChange={onChange}
        aria-label="Search"
      />
    </S.Header>
  );
}
export default Search;
