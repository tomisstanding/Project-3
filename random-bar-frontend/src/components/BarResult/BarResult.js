import React, {Component} from "react";
import {Link} from "react-router";

import Nav from "../Nav/Nav";
import BarInfo from "./BarInfo";

class BarResult extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="bar-results">
            <BarInfo
              status="Open"
              name="Bar Name"
              rating="4.5"
              phone_number="7863657596"
              price_range="$$"
            />

            <div className="randomizer">
              <h1>Need another option?</h1>
              <button>Find another bar.</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BarResult;
