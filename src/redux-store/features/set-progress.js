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
    assessment: state => {
      state.page = 2;
    },
    interview: state => {
      state.page = 3;
    },
    off: state => {
      state.page = -1;
    },
  },
});

export const { personality, language, assessment, interview, off } =
  progressPageSlice.actions;

export default progressPageSlice.reducer;
