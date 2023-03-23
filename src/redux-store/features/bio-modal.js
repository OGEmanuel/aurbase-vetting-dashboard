import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const bioModalSlice = createSlice({
  name: 'bio',
  initialState,
  reducers: {
    bioData: state => {
      state.open = !state.open;
    },
  },
});

export const { bioData } = bioModalSlice.actions;

export default bioModalSlice.reducer;
