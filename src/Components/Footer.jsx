import React from "react";

const Footer = () => {
  return (
    <div >
    <div className="mainFoot">
      <div>
        <img
          src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/OLA.svg"
          alt="ola"
        />
        <div className="Footlogos">
          <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/insta.svg" alt="insta" />
          <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/youtube.svg" alt="youtube" />
          <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/twitter.svg" alt="x" />
        </div>
      </div>
      <div className="FooterP">
        <p>Book a Cab</p>
        <p>Drive With Us</p>
        <p>Outstation</p>
        <p>Rental</p>
        <p>Ola Money</p>
        <p>Corporate</p>
      </div>
      <div className="FooterP">
        <p>About Us</p>
        <p>Contact Us</p>
        <p>Support</p>
        <p>Careers</p>
        <p>Media Centre</p>
      </div>
      <div className="FooterP">
        <p>Ola S1</p>
        <p> Futurefactory </p>
        <p>Electric</p>
        <p>Media Centre</p>
      </div>
    
    </div>
    </div>
  );
};

export default Footer;
