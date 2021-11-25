import { actionTypes } from '../actions/actionTypes';
import { INITIAL_STATE } from './initialState';

const toggleButton = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_BUTTON:
      return {
        ...state,
        toggleButton: !state.toggleButton,
      };
    default:
      return state;
  }
};

export default toggleButton;
