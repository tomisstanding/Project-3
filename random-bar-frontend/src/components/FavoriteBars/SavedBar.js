import React from "react";

function SavedBar(props) {
  return(
    <div>
      <div>
        <h4>{props.name}</h4>
      </div>
      <div className="saved-bar-info">
        <ul>
          <li>{props.rating}</li>
          <li>{props.address}</li>
          <li>{props.phone_number}</li>
        </ul>
        <button>Remove from Favorites</button>
      </div>
    </div>
  );
}

export default SavedBar;
