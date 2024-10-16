import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';
import productsSliceReducer from '../features/silces/productsSlice';
import cartSliceReducer from '../features/silces/cartSlice';
import filterSliceReducer from '../features/silces/filterSlice';
// configure store for redux

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    products: productsSliceReducer,
    carts: cartSliceReducer,
    filter: filterSliceReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
