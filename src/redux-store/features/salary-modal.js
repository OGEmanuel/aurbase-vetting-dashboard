import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const salaryModalSlice = createSlice({
  name: 'salary',
  initialState,
  reducers: {
    salaryModal: state => {
      state.open = !state.open;
    },
  },
});

export const { salaryModal } = salaryModalSlice.actions;

export default salaryModalSlice.reducer;
