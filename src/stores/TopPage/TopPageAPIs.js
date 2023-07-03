import { createAsyncThunk } from '@reduxjs/toolkit';

import { MealHistory } from '../DummyData';

export const fetchMealHistory = createAsyncThunk(
  'meal/fetchMealHistoryStatus',
  async (cb, thunkAPI) => {
    try {
      const data = MealHistory;
      cb && cb();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  },
);
