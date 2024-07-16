import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../utilites/apiurl';

const loginAction = createAsyncThunk(
  'loginAction',
  async (loginData, { rejectWithValue }) => {
    try {
      const { data } = await API.post('auth/login', loginData);
      if (data.success) {
        console.log(data);
        localStorage.setItem('token', data);
        localStorage.setItem('user', JSON.stringify(data));
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
      const { data } = await API.post('auth/register', data);
      if (data.success) {
        console.log(data);
        return data.result;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export { registerAction, loginAction };
