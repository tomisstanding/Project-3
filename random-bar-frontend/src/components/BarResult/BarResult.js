import React, {Component} from "react";


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
      bars: '',
      display: {
        display: 'none'
      }
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

  handleSubmit(event) {
    event.preventDefault();

    fetch('http://localhost:8000/saved_bars', {
      method: 'POST',
      body: JSON.stringify({
        bar: {
          name: `${this.state.bars.name}`,
          rating: parseInt(`${this.state.bars.rating}`),
          phone: `${this.state.bars.display_phone}`,
          price: `${this.state.bars.price}`,
          address: `${this.state.bars.location.display_address}`
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    })

  }

  render(){
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="loading-anim" style={this.state.display}></div>
          <div className="bar-results">
            <div className="bar-card">
              <BarInfo
                name={this.state.bars.name}
                status={this.state.bars.is_closed}
                rating={this.state.bars.rating}
                phone_number={this.state.bars.display_phone}
                price_range={this.state.bars.price}
              />
              <button className="outline-btn">See More Info</button>
              <button className="secondary-btn" type="submit" onClick={this.handleSubmit.bind(this)}>Add to Favorites</button>
              {/* <form className="hidden-form" onSubmit={this.handleSubmit.bind(this)}>
                <input name="bar_name" type="text" value={this.state.bars.name} />
                <input name="bar_rating" type="text" value={this.state.bars.rating} />
                <input name="phone_number" type="text" value={this.state.bars.display_phone} />
                <input name="price_range" type="text" value={this.state.bars.price} />
              </form> */}
            </div>
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
