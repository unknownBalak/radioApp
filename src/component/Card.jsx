import React from "react";
import "./cssFile/Card.css";
import { Link } from "react-router-dom";
function Card({ cn, logo, state, link, stationName, votes }) {

  let src = logo ? logo : `https://picsum.photos/id/${votes}/200/300`;
  return (
    <Link to="/details">
      <div className="card">
        <img src={src} alt={stationName} lazyloading />
      </div>
    </Link>
  );
}

export default Card;
