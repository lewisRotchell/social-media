import axios from "axios";
import {
  USERS_SEARCH_REQUEST,
  USERS_SEARCH_SUCCESS,
  USERS_SEARCH_FAIL,
} from "./usersTypes";

export const getUsers = (username) => async (dispatch) => {
  try {
    dispatch({
      type: USERS_SEARCH_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    console.log(username);

    const { data } = await axios.post(
      `/api/users/get-users`,
      { username },
      config
    );

    console.log(data.users);

    dispatch({
      type: USERS_SEARCH_SUCCESS,
      payload: data.users,
    });
  } catch (error) {
    dispatch({
      type: USERS_SEARCH_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
