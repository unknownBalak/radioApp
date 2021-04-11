import React from "react";
import "./cssFile/Card.css";
import { Link } from "react-router-dom";
function Card() {
  return (
    <Link to="/details">
      <div className="card">Card is here</div>
    </Link>
  );
}

export default Card;
