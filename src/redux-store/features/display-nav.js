import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideNav: false,
};

export const displayNavSlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    nav: state => {
      state.sideNav = !state.sideNav;
    },
  },
});

export const { nav } = displayNavSlice.actions;

export default displayNavSlice.reducer;
