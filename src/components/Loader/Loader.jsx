import React from "react";
import LoadingImage from "../../images/logo.png";

const Loader = () => {
  return (
    <div className="pageloader">
      <div className="loader-anim">
        <img alt="" className="img-fluid" src={LoadingImage} />
      </div>
    </div>
  );
};

export default Loader