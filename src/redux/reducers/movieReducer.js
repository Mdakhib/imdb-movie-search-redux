import { ActionTypes } from "../constants/action-types";

const initialState = {
  movies: [],
  // movie: [],
  text: "harry",
  loading: false,
};

export const moviesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_MOVIES:
      return {
        ...state,
        movies: payload,
        loading: false,
      };
    case ActionTypes.SELECTED_MOVIE:
      return {
        ...state,
        ...payload,
        loading: false,
      };
    // case ActionTypes.REMOVE_SELECTED_MOVIE:
    //   return {}
    // case ActionTypes.SEARCH_MOVIES:
    //   return {
    //     ...state,
    //     text: payload,
    //   };
    case ActionTypes.LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};

export const selectedMovieReducer = (state = {}, { type, payload }) => {
  switch (type) {
    // case ActionTypes.SELECTED_MOVIE:
    //   return {
    //     ...state,
    //     ...payload,
    //   };
    case ActionTypes.REMOVE_SELECTED_MOVIE:
      return {};
    default:
      return state;
  }
};