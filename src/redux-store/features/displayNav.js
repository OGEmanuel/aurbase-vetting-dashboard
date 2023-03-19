import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  display: false,
};

export const displayNavSlice = createSlice({
  name: 'displayNav',
  initialState,
  reducers: {
    display: state => {
      state.display = !state.display;
    },
  },
});

export const { display } = displayNavSlice.actions;

export default displayNavSlice.reducer;
