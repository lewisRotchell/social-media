import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_FAIL,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_LOADED,
  USER_LOADED_FAIL,
} from "./userTypes";

const initialState = {
  userInfo: {},
  loading: false,
  error: null,
  token: null,
};

export const userLoginReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_LOGIN_REQUEST:
      return {
        loading: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        token: payload,
      };
    case USER_LOADED:
      return {
        ...state,
        loading: false,
        userInfo: payload,
      };
    case USER_LOGIN_FAIL:
    case USER_LOADED_FAIL:
      return {
        loading: false,
        userInfo: null,
        error: payload,
        token: null,
      };
    case USER_LOGOUT:
      return {
        loading: false,
        userInfo: null,
        token: null,
      };

    default:
      return state;
  }
};
