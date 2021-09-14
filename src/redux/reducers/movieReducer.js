import { ActionTypes } from "../constants/action-types";

const initialState = {
  movies: [],
  //   movie: [],
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_MOVIES:
      return {
        ...state,
        movies: payload,
      };
    default:
      return state;
  }
};
