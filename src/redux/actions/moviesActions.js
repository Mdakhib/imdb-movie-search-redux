import { ActionTypes } from "../constants/action-types";
import IMDBApi from "../../apis/IMDBApi";

// export const searchInput = (text) => (dispatch) => {
//   dispatch({
//     type: ActionTypes.SEARCH_MOVIES,
//     payload: text,
//   });
// };

// console.log(process.env);

export const fetchMovies =
  (text = "batman") =>
  async (dispatch) => {
    const response = await IMDBApi.get(
      `/?apikey=${process.env.REACT_APP_API_KEY}&s=${text}`
    ); //process.env.REACT_APP_API_KEY
    dispatch({ type: ActionTypes.FETCH_MOVIES, payload: response.data });
    console.log("Response:", response);
  };

export const fetchMovie = (id) => async (dispatch) => {
  const response = await IMDBApi.get(
    `/?apikey=${process.env.REACT_APP_API_KEY}&i=${id}`
  );
  dispatch({ type: ActionTypes.SELECTED_MOVIE, payload: response.data });
};


export const removeSelectedMovie = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_MOVIE,
  };
};

export const setLoading = () => {
  return {
    type: ActionTypes.LOADING,
  };
};