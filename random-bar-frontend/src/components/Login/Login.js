import React, {Component} from "react";
import Nav from "../Nav/Nav";
import {Link} from "react-router";
import {browserHistory} from "react-router";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state={
      user: {}
    }
  }
  render() {
    return (
     <div>
     <Nav />
        <div className="form-container">
        <h1>Login Here</h1>
        <form className="Login">
          <div className="email">
             Email:
          </div>
          <input type="text" className="login-form" />
          <div className="password">
             password:
          </div>
          <input type="text" className="login-form" />
          <div className="login-form">
            <button type="submit" className="form-button">
              Login
            </button>
          </div>
        </form>
        </div>
      </div>
    )
  }
}

export default Login;
