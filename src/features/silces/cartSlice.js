// write a cart slice for products

import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id,
      );
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else if (!existingProduct) {
        state.push({
          ...action.payload,
          quantity: action.payload.quantity || 1,
        });
      }
    },
    removeFromCart: (state, action) => {
      const existingProduct = state.find(
        (item) => item?.id === action.payload?.id,
      );
      if (existingProduct) {
        if (existingProduct.quantity === 1) {
          state = state.filter((item) => item?.id !== action.payload?.id);
        } else {
          existingProduct.quantity -= 1;
        }
      }
    },

    clearCart: (state, action) => {
      state = state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

export const selectCart = (state) => state.carts;
export const selectTotal = (state) => {
  return state.carts
    .reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0)
    .toFixed(2);
};

export const checkCart = (state, id) => {
  return state.carts.some((item) => item.id === id);
};
