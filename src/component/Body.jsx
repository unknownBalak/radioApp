import React from "react";
import "./cssFile/body.css";
import Card from "./Card";
import data from "./fetch.js";
function Body() {
  //Fetching the data. from database ...
  console.log(data);
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
