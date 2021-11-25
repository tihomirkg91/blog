import { INITIAL_STATE } from './initialState';
import { actionTypes } from '../actions/actionTypes';
const selectedPostReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SELECTED_POST:
      return action.payload;
    default:
      return state;
  }
};

export default selectedPostReducer;
