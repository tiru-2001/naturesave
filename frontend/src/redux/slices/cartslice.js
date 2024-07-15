import { createSlice } from '@reduxjs/toolkit';

let initialState = {
  cartItems: [],
  totalQuantity: 0,
  totalPrice: 0,
};
const cartslice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addTocart(state, action) {
      console.log(action.payload);
      const findItem = state.cartItems.find(
        (item) => item.slug === action.payload.slug
      );

      if (!findItem) {
        state.cartItems.push(action.payload);
        state.totalQuantity += 1;
        state.totalPrice += action.payload.price;
      }
    },
    incrementQuantity(state, action) {
      console.log(action.payload);

      state.cartItems = state.cartItems.map((item) => {
        if (
          item.slug == action.payload.slug &&
          item.stock > action.payload.quantity
        ) {
          item.quantity += 1;
          state.totalQuantity += 1;
          state.totalPrice += action.payload.price;
          return item;
        } else {
          return item;
        }
      });
    },
    decrementQuantity(state, action) {
      state.cartItems = state.cartItems.map((item) => {
        if (item.slug == action.payload.slug && item.quantity > 1) {
          item.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= action.payload.price;
          return item;
        } else {
          return item;
        }
      });
    },

    deleteItem(state, action) {
      const findItem = state.cartItems.find(
        (item) => item.slug === action.payload
      );
      if (findItem) {
        state.totalQuantity -= findItem.quantity;
        state.totalPrice -= findItem.price * findItem.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.slug !== action.payload
        );
      }
    },
  },
});

const { addTocart, incrementQuantity, decrementQuantity, deleteItem } =
  cartslice.actions;
export { addTocart, incrementQuantity, decrementQuantity, deleteItem };
export default cartslice.reducer;
