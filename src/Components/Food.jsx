import React from "react";

const Food = () => {
  return (
    <div className="mainFood">
      <h1>
        Experience a new <br /> way to order food
      </h1>
      <div>
      <div className="Food1">
        <h3>ONDC Food</h3>
        <p>
          Make hunger disappear with <br /> your go to comfort food.
        </p>
        <h4>Explore more on Ola app →</h4>
      </div>
      <div className="Food2">
        <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/foods-variety.png" alt="food1" />
        <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/foods-discount.png" alt="fod2" />
        <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/foods-delivery.png" alt="fod3" />
      </div>
      </div>
      <p>Powered by Ola Stores Technologies Private Limited</p>
    </div>
  );
};

export default Food;
