import React from "react";
import star from "../../assets/svg/star-wars.svg";

const LoadingPlanet = () => {
  return (
    <div className="App-header d-inline-flex">
      <p>is loading...&nbsp;</p>
      <img
        src={star}
        className="loading"
        alt="loading"
        style={{ height: "20px" }}
      />
    </div>
  );
};

export default LoadingPlanet;
