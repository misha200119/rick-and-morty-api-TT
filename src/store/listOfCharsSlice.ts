// there I imported rootState from store because i use it in selectors for this inner state

/* eslint-disable import/no-cycle */

// Redux Toolkit allows us to write "mutating" logic in reducers. It
// doesn't actually mutate the state because it uses the Immer library,
// which detects changes to a "draft state" and produces a brand new
// immutable state based off those changes

/* eslint-disable no-param-reassign */

// i use action before initialization in thunk so i need it to off warning of linter

/* eslint-disable @typescript-eslint/no-use-before-define */

import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';
import { getCharacters, getCharactersByName } from '../api/api';
import { Character } from '../types/Character';

interface ListOfCharsState {
  isFilterLoading: boolean;
  filteredByNameChars: Array<Character>;
  charactersPage: Array<Character>;
  isListLoading: boolean;
  pagesTotal: number;
  count: number;
  next: string | null;
  prev: string | null;
}

const initialState: ListOfCharsState = {
  isFilterLoading: false,
  filteredByNameChars: [],
  charactersPage: [],
  isListLoading: true,
  pagesTotal: 0,
  count: 0,
  next: null,
  prev: null,
};

export const loadCharactersPage = createAsyncThunk(
  'listOfChars/loadCharactersPage',
  async (pageNumber: string, thunkAPI) => {
    const { dispatch } = thunkAPI;

    const response = await getCharacters(pageNumber);
    const {
      count,
      next,
      prev,
      pages,
    } = response.info;

    dispatch(setPagesTotal(pages));
    dispatch(setCount(count));
    dispatch(setNext(next));
    dispatch(setPrev(prev));

    dispatch(setIsListLoading(false));

    return response.results;
  },
);

export const loadFilteredByNameChars = createAsyncThunk(
  'listOfChars/loadFilteredByNameChars',
  async (query: string, thunkAPI) => {
    const { dispatch } = thunkAPI;

    dispatch(setIsFilterLoading(true));

    try {
      const response = await getCharactersByName(query);

      return response.results;
    } catch (e) {
      return [];
    } finally {
      dispatch(setIsFilterLoading(false));
    }
  },
);

export const listOfChars = createSlice({
  name: 'listOfPosts',
  initialState,
  reducers: {
    setCharacters: (state, action: PayloadAction<Array<Character>>) => {
      state.charactersPage = action.payload;
    },
    setIsListLoading: (state, action: PayloadAction<boolean>) => {
      state.isListLoading = action.payload;
    },
    setPagesTotal: (state, action: PayloadAction<number>) => {
      state.pagesTotal = action.payload;
    },
    setNext: (state, action: PayloadAction<string | null>) => {
      state.next = action.payload;
    },
    setPrev: (state, action: PayloadAction<string | null>) => {
      state.prev = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    setIsFilterLoading: (state, action: PayloadAction<boolean>) => {
      state.isFilterLoading = action.payload;
    },
    setFilteredByNameChars: (state, action: PayloadAction<Array<Character>>) => {
      state.filteredByNameChars = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadCharactersPage.fulfilled, (state, action) => {
        state.charactersPage = action.payload;
      })
      .addCase(loadFilteredByNameChars.fulfilled, (state, action) => {
        state.filteredByNameChars = action.payload;
      });
  },
});

export const {
  setCharacters,
  setIsListLoading,
  setPagesTotal,
  setNext,
  setPrev,
  setCount,
  setIsFilterLoading,
  setFilteredByNameChars,
} = listOfChars.actions;

export const selectors = {
  getCharactersPage: (state: RootState) => state.listOfChars.charactersPage,
  getIsListLoading: (state: RootState) => state.listOfChars.isListLoading,
  getPrev: (state: RootState) => state.listOfChars.prev,
  getNext: (state: RootState) => state.listOfChars.next,
  getPagesTotal: (state: RootState) => state.listOfChars.pagesTotal,
  getCount: (state: RootState) => state.listOfChars.count,
  getFilteredByNameChars: (state: RootState) => state.listOfChars.filteredByNameChars,
  getIsFilterLoading: (state: RootState) => state.listOfChars.isFilterLoading,
};

export default listOfChars.reducer;
