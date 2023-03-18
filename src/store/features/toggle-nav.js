import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
  name: 'toggle',
  initialState: {
    display: false,
  },
  reducers: {
    saveToggle: state => {
      state.display = !state.display;
    },
  },
});

const { reducer, actions } = toggleSlice;
export const { saveToggle } = actions;

export default reducer;
