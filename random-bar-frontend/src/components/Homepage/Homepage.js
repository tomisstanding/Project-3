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
          <div className="homepage-main">
            <h1>Looking for a bar?</h1>
          </div>
          <div className="homepage-main">
            <input id="submit" type="submit" value="Find Bar" />
          </div>
        </div>

      </div>
    )
  }
}

export default Homepage;
