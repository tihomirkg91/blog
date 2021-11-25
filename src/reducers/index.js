import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import selectedPostReducer from './selectedPostReducer';
import toggleButton from './toggleButtonReducer';

export default combineReducers({
  posts: postsReducer,
  selectedPost: selectedPostReducer,
  toggleButtonState: toggleButton,
});
