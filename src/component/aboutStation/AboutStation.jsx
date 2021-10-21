import React, { useContext } from "react";
import "./aboutstation.css";
import "../cssFile/animation.css";
import { StationContext } from "../store/StationProvider";
import { Link } from "react-router-dom";

function AboutStation(props) {
  const data = useContext(StationContext);
  
  console.log("This is in about station", props.location);
  let { id } = props.location.state[0];

  let stationName = data.find((item, index) => item.stationuuid === id);

  if (stationName) {
    localStorage.setItem("key", JSON.stringify(stationName));
  }
  
  let { country, favicon, homepage, language, name, url, state, votes } =
    JSON.parse(localStorage.getItem("key"));

  let music = url ? (
    <audio controls>
      <source src={url} />
    </audio>
  ) : (
    "We don't have valid link here to play this radio."
  );

  return (
    <div className="aboutStation">
      <div className="aboutStationBody">
        <div className="box left">
          <img
            src={
              favicon ? favicon : `https://picsum.photos/id/${votes}/200/300`
            }
            alt="name"
          />
        </div>
        <div className="box right">
          <p className="spanClass">
            The station <span className="hl"> {name} </span> situated in
            <span className="hl">{state ? state : "state not known"}</span>,
            <span className="hl">
              {country ? country : "Country not known"}
            </span>
            . The station plays songs in
            <span className="hl">
              {" "}
              {language ? language : "Language not known"}
            </span>
            If you want to visit their home page You can click
            <Link to={{ pathname: homepage }} target="_blank" className="hl">
              Here
            </Link>
            to visit. And If you don't want to visit there website then you can
            go listen music of them. Click
            <Link to={{ pathname: url }} target="_blank" className="hl">
              Here
            </Link>
            . You know the station have <span className="hl">{votes}</span>{" "}
            votes.
          </p>
          <div className="playMusic">Let's Play the music : {music}</div>
        </div>
      </div>
    </div>
  );
}

export default AboutStation;
