import React from "react";
import MovieListing from "../MovieListing/MovieListing";
import SearchInput from "../SearchInput/SearchInput";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";

const Home = () => {
  const loading = useSelector((state) => state.allMovies.loading);
  return (
    <div>
      <SearchInput />
      {loading ? <Loading /> : <MovieListing />}
    </div>
  );
};

export default Home;
