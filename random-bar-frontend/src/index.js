import React from "react";
import ReactDom from "react-dom";
import {Route, Router, browserHistory} from "react-router";

import "./styles/normalize.css";
import "./styles/style.css";
import "./vendors/font-awesome/css/font-awesome.css"

import Homepage from "./components/Homepage/Homepage";
import BarResult from "./components/BarResult/BarResult";
import FavoriteBars from "./components/FavoriteBars/FavoriteBars";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
// import Restricted from "./components/Restricted/Restricted";

ReactDom.render(
  <Router history={browserHistory}>
    <Route path="/" component={Homepage} />
    <Route path="/bar-result" component={BarResult} />
    <Route path="/:user_id/dashboard" component={FavoriteBars} />
    <Route path="/signup" component={SignUp} />
    <Route path="/login" component={Login} />
    {/* <Route path="/Restricted" component={Restricted} /> */}
  </Router>
  , document.getElementById("app")
);
