import React from "react";

const Download = () => {
  return (
    <div className="mainDown">
      <h1>
        Download our apps to <br /> get the best experience
      </h1>
      <div className="Down1">
        <div>
          {" "}
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/olalogo.svg"
            alt="olalogo"
          />
          <div>
            <span>Ola</span> <span>→</span>
          </div>
          <p>Book cabs, buy insurance, access Ola Money and much more</p>
        </div>
        <div>
          {" "}
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ola-driver.svg"
            alt="olalogo"
          />
          <div>
            <span>Ola Driver</span> <span>→</span>
          </div>
          <p>Register as a driver to take rides, see your earnings and incentives</p>
        </div>
      </div>
    </div>
  );
};

export default Download;
