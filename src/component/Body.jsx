import React, { useContext } from "react";
import "./cssFile/body.css";
import Card from "./Card";
import { StationContext } from "./StationProvider";
function Body() {
  const data  = useContext(StationContext);
  let subArr = [];
  let limit = 20;
  if (data.length !== 0) {
    for (let i = 0; i < limit; i++) {
      let station = data[i];
      subArr.push(
        <Card key={i} logo={station.favicon} index={i} id={station.stationuuid} votes={station.votes} />
      );
    }
  }
  // console.log(data);
  if (data.length === 0) {
    return (
      <div className="bodyBar">
        <h2 className="loadginSign">Loading....</h2>
      </div>
    );
  } else {
    return <div className="bodyBar">{subArr}</div>;
  }
}

export default Body;
