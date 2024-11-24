import React from "react";

const Diff = () => {
  return (
    <div className="mainDiff">
      <h1>Making a difference</h1>
      <div className="Diff1">
        <p>
          Ola Foundation, the social welfare arm of Ola, is an outcome of a
          belief based on real interactions, research, and extensive study on
          the far-reaching impact of enabling and equipping people.
        </p>
        <div>
          <h3>1 Lakh+</h3>
          <p>Families impacted in FY 2020-21</p>
        </div>
        <div>
          <h3>93 Lakh+</h3>
          <p>Meals enabled across India in FY 2020-21</p>
        </div>
      </div>
      <div className="Diff2">
        <div>
          <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/womens.png" alt="diffImg1" />
          <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/donating.png" alt="diffImg2" />
        </div>
        <div>
          <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/mother-son.png" alt="diffImg3" />
        </div>
      </div>
      <h3> More about Ola Foundation → </h3>
    </div>
  );
};

export default Diff;
