import { configureStore } from '@reduxjs/toolkit';
// import display from './features/display';
// import { nav } from './features/display';
import displayReducer from './features/display';

export const store = configureStore({
  reducer: {
    display: displayReducer,
  },
});
