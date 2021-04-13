import React from "react";
import { Link } from "react-router-dom";
import "./cssFile/footer.css";
function Footer() {
  return (
    <div className="footer">
      Made with <span className="love">&hearts;</span> by Shashi, Get code on Github. Click{" "}
      <Link to={{ path: "https:github.com" }} target="_blanck">
        Here
      </Link>
    </div>
  );
}

export default Footer;
