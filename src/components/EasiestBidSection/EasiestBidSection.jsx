import React from "react";
import FreeTag from "../../images/free-tag.png";
import "./EasiestBidSection.scss";

const EasiestBidSection = (props) => {
  return (
    <section>
      <div className="intro-video-wrap shape-right-pattern shape-right-top pt-30 pb-90 position-relative w-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="backgroundImage">
              <div className="col-md-6 col-sm-12 col-lg-12">
                <div className="intro-desc w-100">
                  <h3 className="mb-0">
                    <strong>Fastest and Easiest</strong> way to Bid
                  </h3>
                  <ul className="mb-0 list-unstyled w-100">
                    <li>
                      <i className="fas fa-check"></i>Takeoff by Division{" "}
                      <span>(Subcontractors)</span>
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Full Project Takeoff
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Takeoff on Demand
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Takeoff Subscription Plans
                    </li>
                    <li>
                      <i className="fas fa-check"></i>Project Leads, Plans and Specs
                      <img className="img-fluid" src={FreeTag} alt="Free Tag" />
                    </li>
                  </ul>
                  <a
                    className="thm-btn orange-btn-bg"
                    href="#"
                    title=""
                  >
                    Explore More<i className="fas fa-arrow-right"></i>
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

export default EasiestBidSection;
