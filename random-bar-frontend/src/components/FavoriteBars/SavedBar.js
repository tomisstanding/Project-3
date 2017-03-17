import React from "react";

function SavedBar(props) {
  return(
    <div className="saved-bar-container">
      <div>
        <h3>{props.name}</h3>
      </div>
      <div className="saved-bar-info">
        <ul>
          <li>Rating: {props.rating}</li>
          <li>Address: {props.address}</li>
          <li>Phone: {props.phone_number}</li>
        </ul>
        <button className="outline-btn">Remove from Favorites</button>
      </div>
    </div>
  );
}

export default SavedBar;
