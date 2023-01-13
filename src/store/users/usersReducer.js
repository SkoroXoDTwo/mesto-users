import { ADD_USERS, SET_LOADING, SET_ERROR } from "./usersConst";

const initialState = {
  isLoading: true,
  list: [],
  error: null,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        isLoading: false,
        list: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
