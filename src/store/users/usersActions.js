import { ADD_USERS, SET_LOADING, SET_ERROR } from "./usersConst";

import api from "../../utils/Api";

const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
});

const setLoading = () => ({
  type: SET_LOADING,
});

const setError = (err) => ({
  type: SET_ERROR,
  payload: err,
});

export const loadUsers = () => (dispatch) => {
  dispatch(setLoading());

  api
    .getInitialUsersInfo()
    .then((res) => {
      dispatch(
        addUsers(res.filter((user) => user.name !== "Jacques Cousteau"))
      );
    })
    .catch((err) => {
      dispatch(setError(err));
    });
};
