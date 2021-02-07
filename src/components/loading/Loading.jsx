import React from "react";
import falcon from "../../assets/svg/falcon.svg";

const Loading = () => {
  return (
    <div className="App-header">
      <img src={falcon} className="loading" alt="loading" />
    </div>
  );
};

export default Loading;
