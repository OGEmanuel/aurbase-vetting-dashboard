import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const aboutModalSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    aboutModal: state => {
      state.open = !state.open;
    },
  },
});

export const { aboutModal } = aboutModalSlice.actions;

export default aboutModalSlice.reducer;
