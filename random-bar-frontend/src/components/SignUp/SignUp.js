import React, {Component} from "react";
import Nav from "../Nav/Nav"
import {Link} from "react-router";
import {browserHistory} from "react-router";

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
           [event.target.name]:event.target.value
        }
      }
    })
    this.setState(newState);

  }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch("")
  // }

  render(){
    return(
      <div>
        <Nav />
        <div className="form-container">
        <h1>Sign Up Here</h1>
        <form className="SignUp">
          <div className="first-name">
             First name:
          </div>
          <input type="text" className="signup-form" />
          <div className="last-name">
             Last name:
          </div>
          <input type="text" className="signup-form" />
          <div className="email">
             Email:
          </div>
          <input type="text" className="signup-form" />
          <div className="username">
             Username:
          </div>
          <input type="text" className="signup-form" />
          <div className="password">
             Password:
          </div>
          <input type="text" className="signup-form" />
          <div className="signup-form">
          <button type="submit" className="form-button">
            Signup
          </button>
          </div>
        </form>
        </div>
      </div>
    )
  }

}

export default SignUp;
