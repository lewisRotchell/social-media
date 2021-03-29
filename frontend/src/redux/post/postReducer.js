import {
  GET_POSTS,
  GET_POSTS_FAIL,
  GET_POSTS_REQUEST,
  CLEAR_POSTS,
} from "./PostTypes";

const initialState = {
  loading: true,
  error: null,
  posts: null,
};

export const postReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_POSTS:
      return {
        ...state,
        loading: false,
        posts: payload,
      };
    case GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
        posts: null,
        error: payload,
      };
    case CLEAR_POSTS:
      return {
        ...state,
        loading: false,
        posts: {},
      };
    default:
      return state;
  }
};
