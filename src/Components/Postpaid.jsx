import React from "react";
import "../App.css";
const Postpaid = () => {
  return (
    <div className="postpaid">
      <h1>
        Experience the <br /> smarter way to pay
      </h1>
      <div className="postpaidM">
        <div className="postImg">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/insurance-shop-img.png"
            alt="post"
          />
        </div>

        <div className="users">
          <p>
            Postpaid + <span>Trusted by 40 lakh+ users</span>
          </p>
          <p>
            Buy now, pay later for all <br /> spends once a month
          </p>
          <div>
            <div>
              <div className="imglogo">
                <img
                  className="flaticon"
                  src="https://cdn-icons-png.flaticon.com/128/12689/12689828.png"
                  alt="logo"
                />
              </div>
              <p>
                Buy now, pay <br /> after 30 days
              </p>
            </div>
            <div>
              <div className="imglogo">
                <img
                  className="flaticon"
                  src="https://cdn-icons-png.flaticon.com/128/2652/2652181.png"
                  alt="logo"
                />
              </div>
              <p>
                Shop across <br /> 20,000 apps
              </p>
            </div>
            <div>
              <div className="imglogo">
                <img
                  className="flaticon"
                  src="https://cdn-icons-png.flaticon.com/128/664/664460.png"
                  alt="logo"
                />
              </div>
              <p>
                Credit limit upto <br /> ₹100,000
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Ins">
        <div>
          <h3>Insurance</h3>
          <h2>
            Effective insurances for all <br /> your risks
          </h2>
          <h4> Explore more on the Ola app →</h4>
        </div>
        <div>
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/insure-trips.svg"
            alt="1st"
          />
          <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/insure-daily.svg" alt="2nd" />
          <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/insure-hospicash.svg" alt="3rd" />
        </div>
      </div>
    </div>
  );
};

export default Postpaid;
