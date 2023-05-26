import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import cartReducer from '../redux/cart/cartSlice';
import { menuApi } from './menu/menuSlice';

export const store = configureStore({
  reducer: {
    [menuApi.reducerPath]: menuApi.reducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(menuApi.middleware),
});

setupListeners(store.dispatch);
