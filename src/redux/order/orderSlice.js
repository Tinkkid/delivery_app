import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'orders',
  initialState: {
    items: [],
  },
  reducers: {
    addOrder: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
    },
  },
});

export default orderSlice.reducer;
