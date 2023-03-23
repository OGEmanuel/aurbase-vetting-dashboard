import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const educationModalSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    educationModal: state => {
      state.open = !state.open;
    },
  },
});

export const { educationModal } = educationModalSlice.actions;

export default educationModalSlice.reducer;
