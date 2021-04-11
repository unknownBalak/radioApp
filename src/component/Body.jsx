import React from "react";
import "./cssFile/body.css";
import Card from "./Card";
import { item } from "./fetch.js";
function Body() {
  //Fetching the data. from database ...
  
  return (
    <div className="bodyBar">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default Body;
