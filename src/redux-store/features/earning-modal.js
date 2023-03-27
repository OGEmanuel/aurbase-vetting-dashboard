import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const earningModalSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    earningModal: state => {
      state.open = !state.open;
    },
  },
});

export const { earningModal } = earningModalSlice.actions;

export default earningModalSlice.reducer;
