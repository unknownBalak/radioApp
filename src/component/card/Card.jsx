import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
function Card({ logo, id, index, stationName, votes }) {
  let src = logo ? logo : `https://picsum.photos/id/${votes}/200/300`;

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
