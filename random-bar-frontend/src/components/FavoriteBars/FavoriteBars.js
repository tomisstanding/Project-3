import React, { Component } from "react";
import { browserHistory } from "react-router";

import Nav from "../Nav/Nav";
import SavedBar from "./SavedBar";

class FavoriteBars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      bars: []
    };
  }

  // get dynamic content from server user saved JWT
  componentDidMount() {

    fetch(`http://localhost:8000/users/dashboard`, {
      method: "GET",
      headers: {
        // "Authorization": `Bearer ${window.localStorage.getItem("token")}`
        "Authorization": window.localStorage.getItem("MyToken")
      }
    })
    .then((results) => {
      results.json().then((data) => {
        this.setState({ bars: data });
        window.localStorage.setItem('user_id', JSON.stringify(this.state.bars[0].user_id));
      })
    })
    .catch((err) => {
      console.log(err)
      browserHistory.push("/users/login");
    })
  }

  render() {
    return(
      <div>
        <Nav />
        <div className="container">
        <h2>Your Favorite Bars</h2>
          {this.state.bars.map((bar) => {
            return(
              <div key={bar.id}>
                <SavedBar
                  name={bar.name}
                  rating={bar.rating}
                  address={bar.address}
                  phone_number={bar.phone}
                />
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default FavoriteBars;
