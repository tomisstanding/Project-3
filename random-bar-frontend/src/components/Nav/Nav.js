import React, { Component } from "react";
import { Link } from "react-router";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="navbar">
        <Link to="/">
          <span className="logo"> Logo </span>
        </Link>
        <ul>
          <li>Sign Up</li>
          <li>Log In</li>
        </ul>
      </div>
    )
  }
}

export default Nav;
