import React, { useState, useEffect } from "react";
import "./cssFile/body.css";
import Card from "./Card";
import main from "./fetch.js";
function Body() {
  const [data, setData] = useState([]);
  useEffect(() => {
    main.then((res) => {
      setData([...res]);
    });
  }, []);
  let subArr = [];
  let limit = 20;
  if (data.length !== 0) {
    for (let i = 0; i < limit; i++) {
      let station = data[i];
      subArr.push(
        <Card
          key={i}
          cn={station.country}
          logo={station.favicon}
          state={station.state}
          link={station.url}
          stationName={station.name}
          votes={station.votes}
        />
      );
    }
  }
  console.log(data);
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
