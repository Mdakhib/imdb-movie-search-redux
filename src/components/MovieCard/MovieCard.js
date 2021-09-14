import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ moviesData }) => {
  const { Title, Year, imdbID, Poster, Type } = moviesData;
  return (
    <div className="cardContainer">
      <Link to={`/movie/${imdbID}`}>
        <div className="cardWrapper">
          <div className="cardImg">
            <img src={Poster} alt={Title} />
          </div>
          <div className="cardDesc">
            <h1>{Title} </h1>
            <div className="cardSubDesc">
              <p>{Year} </p>
              <p>{Type} </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
