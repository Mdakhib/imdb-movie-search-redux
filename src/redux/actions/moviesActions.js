import { ActionTypes } from "../constants/action-types";
import { APIKEY } from "../../apis/APIKEY";
import IMDBApi from "../../apis/IMDBApi";

export const fetchMovies = () => async (dispatch) => {
  const response = await IMDBApi.get(`/?apikey=${APIKEY}&s=batman`);
  dispatch({ type: ActionTypes.FETCH_MOVIES, payload: response.data });
  console.log("Response:", response);
};
