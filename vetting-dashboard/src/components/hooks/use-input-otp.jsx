import { useReducer } from 'react';

const inputStateReducer = (_, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value };
  }

  return inputStateReducer;
};

const useOTPInput = () => {
  const [inputState, dispatch] = useReducer(inputStateReducer, { value: '' });

  const valueChangeHandler = e => {
    dispatch({ type: 'INPUT', value: e.target.value });
  };

  return {
    value: inputState.value,
    valueChangeHandler,
  };
};

export default useOTPInput;
