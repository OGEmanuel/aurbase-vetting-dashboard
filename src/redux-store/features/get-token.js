import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
};

const getAuthTokenSlice = createSlice({
  name: 'AuthToken',
  initialState,
  reducers: {
    Auth: (state, { payload }) => {
      state.token = payload;
    },
  },
});

export const { Auth } = getAuthTokenSlice.actions;

export default getAuthTokenSlice.reducer;
