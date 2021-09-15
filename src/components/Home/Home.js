import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import SearchInput from "../SearchInput/SearchInput";
import Loading from "../Loading/Loading";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../redux/actions/moviesActions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loading = useSelector((state) => state.allMovies.loading);
  console.log("loading", loading);
  return (
    <div>
      <SearchInput />
      {loading ? <Loading /> : <MovieListing />}
    </div>
  );
};

export default Home;
