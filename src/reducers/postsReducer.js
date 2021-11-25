import { INITIAL_STATE } from './initialState';
import { actionTypes } from '../actions/actionTypes';
const postsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_POSTS:
      return action.payload;
    default:
      return state;
  }
};

export default postsReducer;
