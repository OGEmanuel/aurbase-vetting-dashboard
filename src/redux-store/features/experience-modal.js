import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const experienceModalSlice = createSlice({
  name: 'experience',
  initialState,
  reducers: {
    experienceModal: state => {
      state.open = !state.open;
    },
  },
});

export const { experienceModal } = experienceModalSlice.actions;

export default experienceModalSlice.reducer;
