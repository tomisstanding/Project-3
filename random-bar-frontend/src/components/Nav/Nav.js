import React, {Component} from "react";
import {Link} from "react-router";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="navbar">

            <div className="header" id="appname">
              Last Call
            </div>
            <div className="header">
              <input type="submit" value="Sign Up" />
            </div>
            <div className="header">
              <input type="submit" value="Login" />
            </div>

        </div>
      </div>
    )
  }
}

export default Nav;
