import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sideNav: false,
};

export const displaySlice = createSlice({
  name: 'display',
  initialState,
  reducers: {
    nav: state => {
      state.sideNav = !state.sideNav;
    },
  },
});

export const { nav } = displaySlice.actions;

export default displaySlice.reducer;
