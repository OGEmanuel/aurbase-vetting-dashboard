import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  open: false,
};

const rolesModalSlice = createSlice({
  name: 'roles',
  initialState,
  reducers: {
    rolesModal: state => {
      state.open = !state.open;
    },
  },
});

export const { rolesModal } = rolesModalSlice.actions;

export default rolesModalSlice.reducer;
