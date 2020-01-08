/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Navbar from './Navbar'
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import * as serviceWorker from "./serviceWorker";

const routing = (
  <Router>
    <div>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
