import React, { useState } from "react";
import "./cssFile/body.css";
import Card from "./Card";
// import { StationContext } from "./StationProvider";
import { Update } from "./Update";

function Body({ data }) {
  // const data = useContext(StationContext);

  const [limit, setLimit] = useState(10);
  let subArr = [];
  // console.log(data);
  if (data.length !== 0) {
    for (let i = 0; i < limit; i++) {
      let station = data[i];
      subArr.push(
        <Card
          key={i}
          logo={station ? station.favicon : " "}
          index={i}
          id={station ? station.stationuuid : " "}
          votes={station ? station.votes : " "}
        />
      );
    }
  }
  if (data.length === 0) {
    return (
      <div className="bodyBar">
        <h1 className="loadginSign">
          <Update />
        </h1>
      </div>
    );
  } else {
    return (
      <div className="bodyBar">
        {subArr}
        <div className="button">
          {limit <= data.length ? (
            <button onClick={() => setLimit((prev) => prev + 10)}>Load More</button>
          ) : (
            <div
              style={{ backgroundColor: "black", padding: "10px", borderRadius: "10px" }}
              className="warning"
            >
              {" "}
              No more data
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Body;
