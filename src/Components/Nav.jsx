import React from "react";
import "../App.css"
const Nav = () => {
  return (
    <div className="navBody">
      <div className="navS">
        <a href="#">
          {" "}
          <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-white-logo.svg" alt="logo" />{" "}
        </a>
        <a href="#"> Ola Electric</a>
        <a href="#"> Kurtrim</a>
        <a href="#"> Outstation</a>
      </div>
      <div className="navE">
        <button className="BookOla">Book An Ola Cab</button>
        <button>Free S1 Test Ride</button>
        <button className="ham">=</button>
      </div>
    </div>
  );
};

export default Nav;
