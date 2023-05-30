import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="name">Smart Uche Monday</div>
      <div className="link">
        <div className="github">
          <a href="http://www.github.com/smartpyj"> Github link </a>
        </div>
        <div className="twitter">
          <a href="http://www.twitter.com/smartpyj_">My Tweet</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
