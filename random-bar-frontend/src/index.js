// Set up your application entry point here...
import React from "react";
import ReactDom from "react-dom";
import {Route, Router, browserHistory} from "react-router";

import "./styles/style.css";

import Homepage from "./components/Homepage/Homepage";
import Nav from "./components/Nav/Nav";
import BarResult from "./components/BarResult/BarResult";

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/show" component={BarResult} />
  </Router>
  , document.getElementById("app")
);
