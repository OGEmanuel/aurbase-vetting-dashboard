import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: false,
};

const displayOverlaySlice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    overlay: state => {
      state.modal = !state.modal;
    },
  },
});

export const { overlay } = displayOverlaySlice.actions;

export default displayOverlaySlice.reducer;
