import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../../redux/actions/moviesActions";
import MovieCard from "../MovieCard/MovieCard";

const MovieListing = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.allMovies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log("movies:", movies);

  let renderMovies = "";
  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard moviesData={movie} key={index} />;
      })
    ) : (
      <div>
        {/* <h1>{movies.Error} </h1> */}
        {null}
      </div>
    );
  // if (movies.length < 1) {
  //   return (
  //     <div>
  //       <h1>pls enter valid movie</h1>
  //     </div>
  //   );
  // }

  return <div>{renderMovies}</div>;
};

export default MovieListing;
