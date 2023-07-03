/* eslint-disable no-unused-vars */
import { createAsyncThunk } from '@reduxjs/toolkit';

import { USER_TOKEN } from '../../helpers/constants';
import TokenService from "../../services/tokenServices";

export const signin = createAsyncThunk(
  'auth/signinStatus',
  async (payload, thunkAPI) => {
    const {formValue, cbSuccess, cbFailure} = payload;
    try {
      const response = USER_TOKEN;
      TokenService.setUser(response);
      cbSuccess && cbSuccess();
      return response;
    } catch (err) {
      cbFailure && cbFailure(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);

export const signup = createAsyncThunk(
  'auth/signupStatus',
  async (payload, thunkAPI) => {
    const {formValue, cbSuccess, cbFailure} = payload;
    try {
      const response = '登録が完了しました';
      cbSuccess && cbSuccess(response);
      return response;
    } catch (err) {
      cbFailure && cbFailure(err);
      return thunkAPI.rejectWithValue(err);
    }
  },
);
