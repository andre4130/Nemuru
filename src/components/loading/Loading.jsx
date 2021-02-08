import React from "react";
import falcon from "../../assets/svg/falcon.svg";

const Loading = () => {
  return (
    <div className="App-header">
      <img src={falcon} className="loading" alt="loading" />
      <p>loading...</p>
    </div>
  );
};

export default Loading;
