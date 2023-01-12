import { ADD_USERS } from "./usersConst";
import api from "../../utils/Api";

const addUsers = (users) => ({
  type: ADD_USERS,
  payload: users,
});

export const loadUsers = () => (dispatch) => {
  api.getInitialUsersInfo().then((res) => {
    dispatch(addUsers(res.filter((user) => user.name !== "Jacques Cousteau")));
  });
};
