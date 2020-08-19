import React from "react";
import Project1 from "../../images/feature-projects/project1.jpg";
import Project2 from "../../images/feature-projects/project2.png";
import Project4 from "../../images/feature-projects/project4.jpg";
const FeatureProjects = (props) => {
  return (
    <section>
      <div className="quantitytakseoff w-100 pt-80 shape-left-pattern position-relative">
        <div className="container">
          <div className="sec-title position-relative text-center w-100">
            <h2 className="mb-0">
              <strong>Feature Projects</strong>
            </h2>
          </div>
          <div className="serv-wrap w-100">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="serv-box text-center w-100">
                  <img
                    className="img-fluid"
                    src={Project1}
                    alt="Service Image 1"
                  />
                  <h3 className="mb-0">Buy Project TakeOff</h3>
                  <p className="mb-0">No Subscription Required</p>
                  {/* <a className="thm-btn gold-btn-bg" href="#" title="">
                    Buy TakeOff<i className="fas fa-arrow-right"></i>
                  </a> */}
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="serv-box text-center bg-color2 border-0 w-100">
                  <span className="d-block">Recommended</span>
                  <img
                    className="img-fluid"
                    src={Project2}
                    alt="Service Image 2"
                  />
                  <p className="mb-0">
                    Check Out Our <strong>Convenient</strong> Subscription Plans
                  </p>
                  {/* <a className="thm-btn orange-btn-bg" href="#" title="">
                    Subscription Plans<i className="fas fa-arrow-right"></i>
                  </a> */}
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="serv-box text-center w-100">
                  <span className="d-block">
                    TakeOff On Demand <i>(TOD)</i>
                  </span>
                  <img
                    className="img-fluid"
                    src={Project4}
                    alt="Service Image 3"
                  />
                  <p className="mb-0">
                    Submit Your Plans & Specs to Get <strong>Free</strong> Quote
                    Today
                  </p>
                  {/* <a className="thm-btn blue-btn-bg" href="#" title="">
                    Get Quote<i className="fas fa-arrow-right"></i>
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 10 }}>
            <a className="thm-btn blue-btn-bg" href="#" title="">
              See More<i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureProjects;
