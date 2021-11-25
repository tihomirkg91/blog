import dummyApi from '../api/dummyApi';
import { actionTypes } from './actionTypes';

export const fetchPosts = () => async (dispatch) => {
  const response = await dummyApi;

  dispatch({ type: actionTypes.FETCH_POSTS, payload: response.data });
};

export const selectedPost = (selectedPostId) => (dispatch, getState) => {
  const posts = getState().posts;
  const selected = posts.data.filter((post) => post.id === selectedPostId);

  dispatch({ type: actionTypes.SELECTED_POST, payload: selected });
};

export const toggleButton = () => ({
  type: actionTypes.TOGGLE_BUTTON,
});

// export const toggleButton = () => (dispatch) => {
//   dispatch({ type: actionTypes.TOGGLE_BUTTON });
// };
