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
  // console.log(data[0].country);
  let subArr = [];
  for (let i = 0; i < 10; i++) {
    subArr.push(<Card key={i} />);
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
