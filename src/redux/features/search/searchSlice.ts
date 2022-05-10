import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface KeywordsState {
  keywords: string[];
}

const initialState: KeywordsState = {
  keywords: [],
};

export const searchSlice = createSlice({
  name: "keywords",
  initialState,
  reducers: {
    addKeywords: (state, action: PayloadAction<string[]>) => {
      state.keywords = action.payload;
    },
    addKeyword: (state, action: PayloadAction<string>) => {
      state.keywords.push(action.payload);
    },
    removeKeyword: (state, action: PayloadAction<number>) => {
      state.keywords.splice(action.payload, 1);
    },
  },
});

export const { addKeywords, addKeyword, removeKeyword } = searchSlice.actions;

export default searchSlice.reducer;
