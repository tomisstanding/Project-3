import React, { Component } from "react";
import { Link, browserHistory } from "react-router";
import update from "react-addons-update";

import Nav from "../Nav/Nav"

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state={
      user:{}
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

  // handleSubmit(event) {
  //   event.preventDefault();
  //
  //   fetch('http://localhost:8000/', {
  //     method: 'POST',
  //     body: JSON.stringify(this.state),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   })
  //   .then(() => {
  //     browserHistory('/');
  //   })
  //   .catch((err) => {
  //     console.log('ERROR: ', err);
  //   })
  // }

  render(){
    return(
      <div>
        <Nav />
        <div className="container">
          <h1>Sign Up Here</h1>
          <form className="form-container">
            <h4>First name:</h4>
            <input name="first_name" type="text" className="signup-form" onChange={this.handleChange.bind(this)} />
            <h4>Last name:</h4>
            <input name="last_name" type="text" className="signup-form" onChange={this.handleChange.bind(this)} />
            <h4>Email:</h4>
            <input name="email" type="email" className="signup-form" onChange={this.handleChange.bind(this)} />
            <h4>Username:</h4>
            <input name="username" type="text" className="signup-form" onChange={this.handleChange.bind(this)} />
            <h4>Password:</h4>
            <input name="password" type="password" className="signup-form" onChange={this.handleChange.bind(this)} />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;
