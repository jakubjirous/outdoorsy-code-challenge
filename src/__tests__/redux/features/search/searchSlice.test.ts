import { addKeyword, addKeywords, removeKeyword } from "../../../../redux/features/search/searchSlice";
import { getStore } from "../../../../redux/getStore";

describe("searchSlice", () => {
  test("initial state for keywords should be empty", () => {
    const reduxStore = getStore();

    expect(reduxStore.getState().search.keywords).toEqual([]);
  });

  test("should add a new keyword", () => {
    const reduxStore = getStore();

    reduxStore.dispatch(addKeyword("volkswagen"));

    expect(reduxStore.getState().search.keywords).toEqual(["volkswagen"]);
  });

  test("should add completely new collection of keywords", () => {
    const reduxStore = getStore();

    reduxStore.dispatch(addKeyword("volkswagen"));
    reduxStore.dispatch(addKeywords(["mercedes", "toyota", "ford"]));

    expect(reduxStore.getState().search.keywords).toEqual(["mercedes", "toyota", "ford"]);
  });

  test("should remove the keywords on specific index", () => {
    const reduxStore = getStore();

    reduxStore.dispatch(addKeywords(["mercedes", "toyota", "ford"]));
    reduxStore.dispatch(removeKeyword(1));

    expect(reduxStore.getState().search.keywords).toEqual(["mercedes", "ford"]);
  });
});
