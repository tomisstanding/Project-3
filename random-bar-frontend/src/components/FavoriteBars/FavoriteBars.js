import React, { Component } from "react";

import Nav from "../Nav/Nav";
import SavedBar from "./SavedBar";

class FavoriteBars extends Component {
  render() {
    return(
      <div>
        <Nav />
        <div className="container">
          <h2>Your Favorite Bars</h2>
          <SavedBar
            name="Bar Name"
            rating="4.5"
            address="573 6th Ave, Brooklyn NY"
            phone_number="7863658759"
          />
        </div>
      </div>
    );
  }
}

export default FavoriteBars;
