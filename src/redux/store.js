import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import cartReducer from './cartSlice';
import { menuApi } from './dishesSlice';

export const store = configureStore({
  reducer: {
    [menuApi.reducerPath]: menuApi.reducer,
    cart: cartReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(menuApi.middleware),
});

setupListeners(store.dispatch);
