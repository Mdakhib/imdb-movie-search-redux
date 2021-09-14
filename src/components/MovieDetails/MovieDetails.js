import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  fetchMovie,
  removeSelectedMovie,
  setLoading,
} from "../../redux/actions/moviesActions";
import Loading from "../Loading/Loading";
import "./MovieDetails.css";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.allMovies); //allMovies   selectedMovie
  const loading = useSelector((state) => state.allMovies.loading);
  const {
    Title,
    Actors,
    Awards,
    Genre,
    Poster,
    Released,
    Runtime,
    Country,
    Language,
    Plot,
    imdbRating,
    imdbVotes,
  } = movie;

  useEffect(() => {
    if (imdbID && imdbID !== "") {
      dispatch(fetchMovie(imdbID));
      dispatch(setLoading());
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
          <h1 className="title">{Title} </h1>
          <div className="ratingWrap">
            <p className="rating">
              IMDB Rating: <span>{imdbRating}</span>{" "}
            </p>
            <p className="rating">
              IMDB Votes: <span>{imdbVotes} </span>
            </p>
            <p className="rating">
              Runtime: <span>{Runtime} </span>
            </p>
            <p className="rating">
              Year: <span>{Released} </span>
            </p>
          </div>
          <p className="desc">{Plot} </p>
          <p className="subDesc">
            Stars:<span>{Actors} </span>
          </p>
          <p className="subDesc">
            Langauages:<span>{Language}</span>
          </p>
          <p className="subDesc">
            Generes:
            <span>{Genre} </span>
          </p>
          <p className="subDesc">
            Awards:
            <span>{Awards} </span>
          </p>
          <p className="subDesc">
            Country:
            <span>{Country} </span>
          </p>
          <div className="btnWrap">
            <Link className="backMovies" to="/">
              Back To Movies
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  let content = loading ? <Loading /> : movieInfo;

  return <div>{content}</div>;
};;

export default MovieDetails;
