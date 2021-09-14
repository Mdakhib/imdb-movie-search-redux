import axios from "axios";

export default axios.create({
  baseURL: "https://www.omdbapi.com",
});

// http://www.omdbapi.com/?i=tt3896198&apikey=214e3757
