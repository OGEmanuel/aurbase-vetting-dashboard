import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './features/about-modal';
import bioReducer from './features/bio-modal';
import displayOverlayReducer from './features/display-modal';
import displayNavReducer from './features/display-nav';
import educationReducer from './features/education-modal';
import experienceReducer from './features/experience-modal';
import openMainOverlayReducer from './features/open-overlay-body';
import rolesReducer from './features/roles-modal';
import salaryReducer from './features/salary-modal';
import earningReducer from './features/earning-modal';
import progressPageReducer from './features/set-progress';
import { talentsApi } from './fetch/talentsSlice';
import { authApi } from '../Auth/api/authApi';
import authSlice from '../redux-store/fetch/authSlice';
// import { authApi } from '../Auth/api/authApi';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import getTokenReducer from './features/get-token';

export const store = configureStore({
  reducer: {
    auth: authSlice,
    display: displayNavReducer,
    show: displayOverlayReducer,
    mainOverlay: openMainOverlayReducer,
    bio: bioReducer,
    about: aboutReducer,
    salary: salaryReducer,
    experience: experienceReducer,
    education: educationReducer,
    roles: rolesReducer,
    earning: earningReducer,
    progress: progressPageReducer,
    authToken: getTokenReducer,
    [talentsApi.reducerPath]: talentsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(talentsApi.middleware),
});

setupListeners(store.dispatch);
