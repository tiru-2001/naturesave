import { configureStore } from '@reduxjs/toolkit';
import authslice from './slices/authslice';
import cartslice from './slices/cartslice';
import productslice from './slices/productslice';
const store = configureStore({
  reducer: {
    aslice: authslice,
    cslice: cartslice,
    productslice: productslice,
  },
});

export { store };
