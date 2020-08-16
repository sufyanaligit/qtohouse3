import React from "react";
import ServiceImage1 from "../../images/resources/serv-img1-1.png"
import ServiceImage2 from "../../images/resources/serv-img1-2.png"
import ServiceImage3 from "../../images/resources/serv-img1-3.png"

const QuantityTakeOff = (props) => {
  return (
    <section>
      <div className="quantitytakseoff w-100 pt-80 shape-left-pattern position-relative">
        <div className="container">
          <div className="sec-title position-relative text-center w-100">
            <h2 className="mb-0">
              Get <strong>Quantity Takeoffs</strong>
            </h2>
          </div>
          <div className="serv-wrap w-100">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="serv-box text-center w-100">
                  <img
                    className="img-fluid"
                    src={ServiceImage1}
                    alt="Service Image 1"
                  />
                  <h3 className="mb-0">Buy Project TakeOff</h3>
                  <p className="mb-0">No Subscription Required</p>
                  <a
                    className="thm-btn gold-btn-bg"
                    href="#"
                    title=""
                  >
                    Buy TakeOff<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="serv-box text-center bg-color2 border-0 w-100">
                  <span className="d-block">Recommended</span>
                  <img
                    className="img-fluid"
                    src={ServiceImage2}
                    alt="Service Image 2"
                  />
                  <p className="mb-0">
                    Check Out Our <strong>Convenient</strong> Subscription Plans
                  </p>
                  <a
                    className="thm-btn orange-btn-bg"
                    href="#"
                    title=""
                  >
                    Subscription Plans<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="serv-box text-center w-100">
                  <span className="d-block">
                    TakeOff On Demand <i>(TOD)</i>
                  </span>
                  <img
                    className="img-fluid"
                    src={ServiceImage3}
                    alt="Service Image 3"
                  />
                  <p className="mb-0">
                    Submit Your Plans & Specs to Get <strong>Free</strong> Quote
                    Today
                  </p>
                  <a
                    className="thm-btn blue-btn-bg"
                    href="#"
                    title=""
                  >
                    Get Quote<i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default QuantityTakeOff;
