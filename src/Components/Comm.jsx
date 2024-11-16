import React from "react";
import "../App.css";

const Comm = () => {
  return (
    <div className="Com">
      <div className="mobility">
        <h1>
          Global mobility ecosystem driving <br /> communities forward
        </h1>
      </div>
      <div className="ComGrid">
        <div className="firstG">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/cts-covered.svg"
            alt="svglogo"
          />
          <h2>250+</h2>
          <h3>Cities Covered</h3>
          <h4>
            Across India, Australia, New <br /> Zealand and the UK
          </h4>{" "}
        </div>
        <div className="firstG">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/year-rides.svg"
            alt="svglogo"
          />
          <h2>55 Cr+</h2>
          <h3>Yearly rides</h3>
          <h4>
          Booked by our customers<br /> every year
          </h4>{" "}
        </div>
        <div className="firstG">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/kms-covered.svg"
            alt="svglogo"
          />
          <h2>12 Cr+</h2>
          <h3>Kilometers on S1</h3>
          <h4>
          Distance covered on Ola S1 <br /> scooters within a year of <br />launch
          </h4>{" "}
        </div>
      </div>
    </div>
  );
};

export default Comm;
