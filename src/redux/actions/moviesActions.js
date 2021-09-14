import { ActionTypes } from "../constants/action-types";
import { APIKEY } from "../../apis/APIKEY";
import IMDBApi from "../../apis/IMDBApi";
import axios from 'axios'


// export const searchInput = (text) => (dispatch) => {
//   dispatch({
//     type: ActionTypes.SEARCH_MOVIES,
//     payload: text,
//   });
// };

console.log(process.env);

// export const fetchMovies =
//   (text = "batman") =>
//   async (dispatch) => {
//     const response = await IMDBApi.get(`/?apikey=${APIKEY}&s=${text}`); //process.env.REACT_APP_API_KEY
//     dispatch({ type: ActionTypes.FETCH_MOVIES, payload: response.data });
//     console.log("Response:", response);
//   };

export const fetchMovies = (text='batman') => (dispatch) => {
  axios
    .get(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${text}`)
    .then((response) =>
      dispatch({
        type: ActionTypes.FETCH_MOVIES,
        payload: response.data,
      }),
      )
      .catch((err) => console.log(err));
    };
    // console.log("Response:", response)


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