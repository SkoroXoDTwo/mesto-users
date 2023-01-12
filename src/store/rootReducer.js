import { combineReducers } from "redux";
import { usersReducer } from "./users/usersReducer";
import { filterReducer } from "./filter/filterReducer";

export const rootReducer = combineReducers({
  users: usersReducer,
  filter: filterReducer,
});
