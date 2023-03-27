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

export const store = configureStore({
  reducer: {
    display: displayNavReducer,
    show: displayOverlayReducer,
    mainOverlay: openMainOverlayReducer,
    bio: bioReducer,
    about: aboutReducer,
    salary: salaryReducer,
    experience: experienceReducer,
    education: educationReducer,
    roles: rolesReducer,
    earning:earningReducer
  },
});
