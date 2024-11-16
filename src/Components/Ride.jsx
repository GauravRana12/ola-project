import React from "react";
import "../App.css"

const Ride = () => {
  return (
    <div className="ride">
      <div className="rideh1">
        <h1>
        There's an Ola ride for everyone
        </h1>
      </div>
      <div className="busGrids">
        <div className="bus">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-budget.svg" alt="bus" />
            <h2>For any budget</h2>
            <p>From Bikes and Autos to Prime Sedans and Prime SUVs, you will find a ride in your budget at your convenience any time.</p>
        </div>
        <div className="bus">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-distance.svg" alt="bus" />
            <h2>For any distance</h2>
            <p>Book rides within the city with Daily, or take a trip to your favourite destinations outside the city with Outstation.</p>
        </div>
        <div className="bus">
            <img src="https://s3-ap-southeast-1.amazonaws.com/ola-prod-website/ride-duration.svg" alt="bus" />
            <h2>For easy duration</h2>
            <p>Easily plan a day out without having to worry about conveyance with an hour-based package from Rental.</p>
        </div>
      </div>
      <div className="Video">
         <div className="gif">
            <img src="https://miro.medium.com/v2/resize:fit:1000/1*bxjciGGM_3NuZ6JyHfLZfQ.gif" alt="gif" />
         </div>
         <div className="gifStext">
                 <h1>Making innovations <br /> since 2011</h1>
                 <div>
                    <h3>For Riders</h3>
                    <p>We constantly experiment to come up with industry-first features for our riders that eventually become a norm.</p>
                 </div>
                 <div>
                    <h3>For Drivers</h3>
                    <p>Our drivers get real time stats to help optimize their rides better and earn more, straight from the app.</p>
                 </div>
                
         </div>
   </div>
    </div>
  );
};

export default Ride;
