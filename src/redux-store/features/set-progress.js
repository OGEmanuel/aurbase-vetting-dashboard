import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  page: 0,
};

const progressPageSlice = createSlice({
  name: 'progress',
  initialState,
  reducers: {
    personality: state => {
      state.page = 0;
    },
    language: state => {
      state.page = 1;
    },
    off: state => {
      state.page = -1;
    },
  },
});

export const { personality, language, off } = progressPageSlice.actions;

export default progressPageSlice.reducer;
