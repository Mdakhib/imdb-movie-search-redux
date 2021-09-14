import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovie,
  removeSelectedMovie,
} from "../../redux/actions/moviesActions";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.selectedMovie); //allMovies   selectedMovie
  const {
    Title,
    Actors,
    BoxOffice,
    Genre,
    Poster,
    Released,
    Runtime,
    Country,
    Language,
  } = movie;

  useEffect(() => {
    if (imdbID && imdbID !== "") {
      dispatch(fetchMovie(imdbID));
      return () => {
        dispatch(removeSelectedMovie());
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imdbID]);
  console.log("Slected Movie:", movie);

  let movieInfo = (
    <div className="cardDetailContainer">
      <div className="cardDetailwrapper">
        <div className="cardDetailImgWrap">
          <img src={Poster} alt={Title} />
        </div>
        <div className="contentContainer">
          <div className="contentWrap">
            <h1>{Title} </h1>
            <h2>{Actors} </h2>
            <div className="langGenreWrap">
              <p>{Language} </p>
              <p>{Genre} </p>
            </div>
            <div className="releaseRuntimeWrap">
              <p>{Released} </p>
              <p>{Runtime} </p>
            </div>
            <div className="boxCountryWrap">
              <p>{BoxOffice} </p>
              <p>{Country} </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <div>{movieInfo}</div>;
};

export default MovieDetails;