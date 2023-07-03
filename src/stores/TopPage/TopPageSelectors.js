import { createSelector } from 'reselect';

const selectMealHistory = (state) => state.meal;

export const getMealHistorySelector = createSelector(
  selectMealHistory,
  (state) => state.mealHistory,
);

export const getFetchingSelector = createSelector(
  selectMealHistory,
  (state) => state.isFetching,
);
