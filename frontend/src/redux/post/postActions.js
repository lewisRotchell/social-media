import axios from "axios";
import { GET_POSTS, GET_POSTS_FAIL, CLEAR_POSTS } from "./PostTypes";
import setAuthToken from "../../utils/setAuthToken";

export const getPosts = () => async (dispatch) => {
  try {
    // if (localStorage.token) {
    //   setAuthToken(localStorage.token);
    // }
    const { data } = await axios.get("/api/post/newsfeed");

    dispatch({
      type: GET_POSTS,
      payload: data.posts,
    });
  } catch (error) {
    dispatch({
      type: GET_POSTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const clearPosts = () => async (dispatch) => {
  dispatch({
    type: CLEAR_POSTS,
  });
};
