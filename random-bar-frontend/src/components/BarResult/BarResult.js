import React, {Component} from "react";
import {Link} from "react-router";

import Nav from "../Nav/Nav";
import BarInfo from "./BarInfo";

class BarResult extends Component {
  constructor(props) {
    super(props);

    this.state = {
      position: {
        coords: {
          latitude: 40.785091,
          longitude: -73.968285
        }
      },
      bars: ''
    }
  }


  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({ position });

      fetch(`http://localhost:8000/api/${this.state.position.coords.latitude}/${this.state.position.coords.longitude}`, {
        method: 'GET'
      })
      .then((results) => {
        results.json().then((data) => {
          this.setState({bars: data[Math.floor(Math.random() * data.length)]});
        });
      })
      .catch((err) => {
        console.log('ERROR: ', err);
      });
    });
  }

  selectNewBar() {
    fetch(`http://localhost:8000/api/${this.state.position.coords.latitude}/${this.state.position.coords.longitude}`, {
      method: 'GET'
    })
    .then((results) => {
      results.json().then((data) => {
        this.setState({bars: data[Math.floor(Math.random() * data.length)]});
      });
    })
    .catch((err) => {
      console.log('ERROR: ', err);
    })
  }

  render(){
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="bar-results">
            <BarInfo
              name={this.state.bars.name}
              status={this.state.bars.is_closed}
              rating={this.state.bars.rating}
              phone_number={this.state.bars.phone}
              price_range={this.state.bars.price}
            />

            <div className="randomizer">
              <h2>Need another option?</h2>
              <button className="standard-btn" onClick={this.selectNewBar.bind(this)}>Find another bar.</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BarResult;
