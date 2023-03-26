import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

export const openMainOverlaySlice = createSlice({
  name: 'mainOverlay',
  initialState,
  reducers: {
    overlayMain: state => {
      state.open = !state.open;
    },
  },
});

export const { overlayMain } = openMainOverlaySlice.actions;

export default openMainOverlaySlice.reducer;
