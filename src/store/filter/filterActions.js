import { EDIT_FILTER } from "./filterConst";

export const editFilter = (filter) => ({
  type: EDIT_FILTER,
  payload: filter,
});
