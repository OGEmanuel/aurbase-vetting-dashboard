import { configureStore } from '@reduxjs/toolkit';
import displayOverlayReducer from './features/display-modal';
import displayNavReducer from './features/display-nav';
import openMainOverlayReducer from './features/open-overlay-body';

export const store = configureStore({
  reducer: {
    display: displayNavReducer,
    show: displayOverlayReducer,
    mainOverlay: openMainOverlayReducer,
  },
});
