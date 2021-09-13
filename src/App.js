import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import MovieDetails from "./components/MovieDetails/MovieDetails";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:imdbID" component={MovieDetails} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
