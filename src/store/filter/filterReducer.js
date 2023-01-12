import { EDIT_FILTER } from "./filterConst";

export const filterReducer = (state = "", action) => {
  switch (action.type) {
    case EDIT_FILTER:
      return action.payload;

    default:
      return state;
  }
};
