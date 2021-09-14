import { ActionTypes } from "../constants/action-types";
import { APIKEY } from "../../apis/APIKEY";
import IMDBApi from "../../apis/IMDBApi";


// export const searchInput = (text) => (dispatch) => {
//   dispatch({
//     type: ActionTypes.SEARCH_MOVIES,
//     payload: text,
//   });
// };

export const fetchMovies =
  (text = "batman") =>
  async (dispatch) => {
    const response = await IMDBApi.get(`/?apikey=${APIKEY}&s=${text}`);
    dispatch({ type: ActionTypes.FETCH_MOVIES, payload: response.data });
    console.log("Response:", response);
  };


export const fetchMovie = (id) => async (dispatch) => {
  const response = await IMDBApi.get(`/?apikey=${APIKEY}&i=${id}`);
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