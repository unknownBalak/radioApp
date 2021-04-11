import React from "react";
import "./cssFile/body.css";
import Card from "./Card";
import makeGetRequest from "./fetch.js";
function Body() {
  //Fetching the data. from database ...
  let data = [];
  async function main() {
    let result = await makeGetRequest;
    return result;
  }
  main().then((res) => {
    // data.push(...res);
    data = res;
    // data.push(...res);
  });
  // let arr = data
  //   .map((item, index) => {
  //     if (index <= 40) {
  //       return <Card />;
  //     }
  //   })
  //   .join("");
  // console.log(data[4].favicon);
  return <div className="bodyBar">{"abc"}</div>;
}
 
export default Body;
