import React, {Component} from "react";
import {Link} from "react-router";
import Nav from "../Nav/Nav";

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Nav />
        <div className="homepage-container">
            <h1>Looking for a bar?</h1>
            <Link to="bar-result">
              <button>Find a Bar</button>
            </Link>
        </div>
      </div>
    )
  }
}

export default Homepage;
