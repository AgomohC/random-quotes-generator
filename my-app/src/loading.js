import React from "react";
import image from "./assets/img-2.gif";

const Loading = () => {
  return (
    <div className="container-fluid mx-auto bg-light">
      <div className="row">
        <div className="col d-flex align-items-center loading justify-content-center height">
          <img src={image} alt="loading" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
