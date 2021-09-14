import { combineReducers } from "redux";
import { moviesReducer, selectedMovieReducer } from "./movieReducer";

const reducers = combineReducers({
  allMovies: moviesReducer,
  selectedMovie: selectedMovieReducer,
});

export default reducers;
