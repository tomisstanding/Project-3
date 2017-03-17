import React, { Component } from "react";
import { browserHistory } from "react-router";

import Nav from "../Nav/Nav";
import SavedBar from "./SavedBar";

class FavoriteBars extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ""
    };
  }

  // when the component is about to mount check for auth token
  componentWillMount() {
    if (!localStorage.getItem("token")) {
      browserHistory.push("/users/login");
    }
  }

  // get dynamic content from server user saved JWT
  componentDidMount() {
    fetch(`http://localhost:8000/users/restricted`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${window.localStorage.getItem("token")}`
      }
    })
    .then((results) => {
      results.json().then((content) => {
        this.setState({ message: content.message })
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
