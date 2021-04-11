import React from "react";
import "./cssFile/Card.css";
import AboutStation from "./AboutStation.jsx";
function Card() {
  return (
    <div className="card" onClick={() => <AboutStation />}>
      Card is here
    </div>
  );
}

export default Card;
