import { configureStore } from '@reduxjs/toolkit';
import displayNav from '../redux-store/features/displayNav';

export const store = configureStore({
  reducer: {
    displayNav,
  },
});
