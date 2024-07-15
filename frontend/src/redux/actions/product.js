import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

/************ addproduct action ****************/

const addProduct = createAsyncThunk(
  'addProduct',
  async (data, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        '  https://naturesave.vercel.app/api/v1/product/add-product',

        { data }
      );

      if (data.success) {
        return data;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

/********************* getProductBySlug action ****************************/
const getProductBySlug = createAsyncThunk(
  'getProductBySlug',
  async (slug, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `    https://naturesave.vercel.app/api/v1/product/getindiproduct/${slug}`
      );

      if (data.success) {
        return data.result;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
/********************* getProductById action ****************************/

const getProductById = createAsyncThunk(
  'getProductById',
  async (id, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `https://naturesave.vercel.app/api/v1/products/getProductById/:${id}`
      );
      if (data.success) {
        return data;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);
/********************* getAllProducts action ****************************/

const getAllProducts = createAsyncThunk(
  'getAllProducts',
  async (inp, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        `    https://naturesave.vercel.app/api/v1/product/getallproducts/`
      );
      if (data.success) {
        return data.result;
      }
    } catch (e) {
      return rejectWithValue(e);
    }
  }
);

export { addProduct, getProductById, getProductBySlug, getAllProducts };
