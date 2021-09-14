import React, { useEffect } from "react";
import "./SearchInput.css";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, searchInput } from "../../redux/actions/moviesActions";
import { useSelector } from "react-redux";

const SearchInput = () => {
  const dispatch = useDispatch();
  //   const constMovie = useSelector((state) => state.allMovies.text);
  const searchValue = useRef("");
  //   console.log("Constant value:", constMovie);

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchMovie = () => {
    dispatch(fetchMovies(searchValue.current.value));
    // dispatch(searchInput(constMovie));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search Movies,TV Series..."
            type="text"
            ref={searchValue}
            onChange={searchMovie}
            className="inputSearch"
          />
        </form>
      </div>
    </div>
  );
};

export default SearchInput;
