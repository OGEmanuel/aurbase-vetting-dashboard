import { createStore } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';

// import toggleSliceReducer from '../store/features/toggle-nav';

// const store = configureStore({
//   reducer: {
//     toggle: toggleSliceReducer,
//   },
// });

// export default store;

const displaySIdebar = (state = { display: false }, action) => {
  if (action.type === 'toggle') {
    return {
      display: !state.display,
    };
  }

  return state;
};

const store = createStore(displaySIdebar);

export default store;
