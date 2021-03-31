import {
  USERS_SEARCH_REQUEST,
  USERS_SEARCH_SUCCESS,
  USERS_SEARCH_FAIL,
} from "./usersTypes";

const initialState = {
  userList: [],
  user: false,
  loading: true,
};

export const usersReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USERS_SEARCH_REQUEST:
      return {
        users: payload,
        loading: false,
        user: false,
      };
    case USERS_SEARCH_SUCCESS:
      return {
        users: payload,
        loading: false,
        user: false,
      };
    case USERS_SEARCH_FAIL:
      return {
        users: [],
        loading: false,
        user: false,
      };
    default:
      return state;
  }
};
