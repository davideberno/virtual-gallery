import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import firebase from "firebase/app";

import Homepage from "./pages/Homepage";
import Artists from "./pages/Artists";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Navbar from "./components/Navbar";

import "./App.css";

const App = () => {
  console.log(firebase);
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/artists" component={Artists} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
};

export default App;
