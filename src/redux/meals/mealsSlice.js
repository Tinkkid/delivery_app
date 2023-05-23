import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchMeals } from './mealsOperation';

const extraActions = [fetchMeals];

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchMeals.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.pending)),
        handlePending
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.fulfilled)),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(...extraActions.map(action => action.rejected)),
        handleRejected
      );
  },
});

export default mealsSlice.reducer;
