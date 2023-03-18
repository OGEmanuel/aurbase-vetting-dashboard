import { createStore } from 'redux';

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
