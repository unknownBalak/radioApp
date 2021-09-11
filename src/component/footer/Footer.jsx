import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
      Made with <span className="love">&hearts;</span> by Shashi, Get code on Github. Click{" "}
      <Link to={{ pathname: "https://github.com/unknownBalak/radioapp" }} target="_blanck">
        Here
      </Link>
    </div>
  );
}

export default Footer;
