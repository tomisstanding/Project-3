import React from "react";

function BarInfo(props) {
  let restaurantStatus;

  if(props.status === false){
    restaurantStatus = 'Open'
  } else {
    restaurantStatus = 'Closed'
  }

  return(
      <div className="bar-card">
        <h1>{props.name}</h1>
        <div className="bar-info">
          <ul>
            <li>{restaurantStatus}</li>
            <li>{props.rating}</li>
            <li>{props.phone_number}</li>
            <li>{props.price_range}</li>
          </ul>
        </div>
      </div>
  );
}

export default BarInfo;
