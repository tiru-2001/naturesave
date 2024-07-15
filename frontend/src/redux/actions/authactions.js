import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const loginAction = createAsyncThunk(
  'loginAction',
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'http://localhost:8700/api/v1/auth/login',
        loginData
      );
      if (data.success) {
        localStorage.setItem('token', data);
        return data.result;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

const registerAction = createAsyncThunk(
  'registerAction',
  async (data, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        'http://localhost:8700/api/v1/auth/register',
        data
      );
      if (data.success) {
        return data.result;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export { registerAction, loginAction };
