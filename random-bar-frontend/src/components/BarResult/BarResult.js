import React, {Component} from "react";
import {Link} from "react-router";
import Nav from "../Nav/Nav";
class BarResult extends Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <div>
        <Nav />
        <div className= "bar-result">
          <div className="bar-detail">
          Bar Name:
          </div>
          <div className="bar-detail">
          Location:
          </div>
          <div className="bar-detail">
          Phone-number:
          </div>
          <div className="bar-detail">
          Review stars:
          </div>
        </div>
      </div>
    )
  }



}

export default BarResult;
