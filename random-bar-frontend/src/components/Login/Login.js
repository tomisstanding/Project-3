import React, {Component} from "react";
import {Link, browserHistory} from "react-router";
import update from "react-addons-update";

import Nav from "../Nav/Nav";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state={
      user: {}
    }
  }

  handleChange(event) {
    let newState = update(this.state, {
      user: {
        $merge: {
          [event.target.name]: event.target.value
        }
      }
    });

    this.setState(newState);
  }

  render() {
    return (
     <div>
     <Nav />
        <div className="container">
          <h1>Login Here</h1>
          <form className="form-container">
            <h4>Email:</h4>
            <input name="email" type="email" placeholder="john.smith@email.com" onChange={this.handleChange.bind(this)} />
            <h4>Password:</h4>
            <input name="password" type="password" placeholder="Password" onChange={this.handleChange.bind(this)} />
            <button type="submit" className="form-button">Login</button>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
