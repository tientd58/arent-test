import { createSlice } from '@reduxjs/toolkit'

import { fetchMealHistory } from './TopPageAPIs';

const initialState = {
  errMsg: '',
  isError: false,
  isFetching: false,
  mealHistory: [],
}

export const TopPageSlices = createSlice({
  name: 'meal',
  initialState,
  reducers: {
    clearState() {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMealHistory.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(fetchMealHistory.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.mealHistory = payload;
      })
      .addCase(fetchMealHistory.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errMsg = payload || '';
      });
  },
})

export const { clearState } = TopPageSlices.actions

export default TopPageSlices.reducer