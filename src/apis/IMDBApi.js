import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// http://www.omdbapi.com/?i=tt3896198&apikey=214e3757
