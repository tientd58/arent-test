import { configureStore } from '@reduxjs/toolkit';

import authReducer from './Auth/AuthSlices';
import mealReducer from './TopPage/TopPageSlices';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    meal: mealReducer,
  },
});
