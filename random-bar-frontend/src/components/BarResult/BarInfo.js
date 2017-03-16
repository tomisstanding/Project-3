import React from "react";

function BarInfo(props) {
  let restaurantStatus;

  let statusStyle = {
    color: '#FF3B44',
  }

  if(props.status === false){
    restaurantStatus = 'Open';
    statusStyle.color = '#41FFC0';

  } else {
    restaurantStatus = 'Closed'
  }

  return(
      <div className="bar-card">
        <h2>{props.name}</h2>
        <div className="bar-info">
          <ul>
            <li style={statusStyle} >{restaurantStatus}</li>
            <li>{props.rating}</li>
            <li>{props.phone_number}</li>
            <li>{props.price_range}</li>
          </ul>
        </div>
        <button className="outline-btn">See More Info</button>
        <button className="secondary-btn">Add to Favorites</button>
      </div>
  );
}

export default BarInfo;
