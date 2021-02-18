import _ from "lodash";
import { async } from "regenerator-runtime";
import jsonplaceholder from "../api/jsonPlaceholder";

//fetch both fetchpost and fetchuser
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());

  const userIds = _.uniq(_.map(getState().posts, "userId"));

  userIds.forEach((id) => dispatch(fetchUser(id)));
};

//Action for fetchpost
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonplaceholder("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

//Action for fetchuser
export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonplaceholder(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

//Note: dispatch and getstate from the inner function was give by redux thunk.

//Note: the dispatch will send the action creator to redux store.

//Note: redux will process the action and update the state.

//Note: component will recieve the state and render it to our component.
