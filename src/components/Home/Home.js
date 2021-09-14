import React from "react";
import MovieListing from "../MovieListing/MovieListing";
import SearchInput from "../SearchInput/SearchInput";

const Home = () => {
  return (
    <div>
      <SearchInput />
      <MovieListing />
    </div>
  );
};

export default Home;
