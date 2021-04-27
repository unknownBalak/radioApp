import React from "react";
import "./cssFile/Card.css";
import { Link } from "react-router-dom";
import { validateURL } from "./urlValidationFile.js";
// import {validateURL } from "./urlValidationFile"
function Card({ logo, id, index, stationName, votes }) {
  let src = validateURL(logo) ? logo : `https://picsum.photos/id/${votes}/200/300`;

  // console.log("index of the station is ", index);
  return (
    <Link
      to={{
        pathname: "/details",
        state: [{ id: id, index: index }],
      }}
    >
      <div className="card">
        <img src={src} alt={stationName} lazyloading="true" />
      </div>
    </Link>
  );
}

export default Card;
