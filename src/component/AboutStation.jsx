import React from "react";
import "./cssFile/aboutstation.css";
import "./cssFile/animation.css";
import Nav from "./Nav";
import { Button } from "react-bootstrap";
function AboutStation() {
  return (
    <div className="aboutStation">
      <Nav />
      <div className="aboutStationBody">
        <div className="box left">
          <img src="https://via.placeholder.com/200" alt="name" />
        </div>
        <div className="box right">
          <Button variant="success">Click here</Button>
          <div className="animation">
            <div className="span1 spanClass">
              <span className="q q1"> Question 1 </span>
              {/* <span className="a a1"> answer 1 </span> */}
            </div>
            <div className="span2 spanClass">
              <span className="q q2"> Question 2 </span>
              {/* <span className="a a2"> answer 2 </span> */}
            </div>
            <div className="span3 spanClass">
              <span className="q q3"> Question 3 </span>
              {/* <span className="a a3"> answer 3 </span> */}
            </div>
            <div className="span4 spanClass">
              <span className="q q4"> Question 4 </span>
              {/* <span className="a a4"> answer 4 </span> */}
            </div>
            <div className="span5 spanClass">
              <span className="q q5"> Question 5 </span>
              {/* <span className="a a5"> answer 5 </span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutStation;
