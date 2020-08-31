import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Project2 from "../../images/dashboard/BackgroundImage2.jpg";
import Project3 from "../../images/dashboard/BackgroundImage3.jpg";
import "./EasiestBidSection.scss";

const EasiestBidSection = (props) => {
  return (
    <section>
      <div className="shape-right-top pt-30 pb-90 position-relative easiest-bid-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="">
              <div className="col-md-6 col-sm-12 col-lg-12">
                <div className="intro-desc w-100">
                  <h3 className="mb-0">
                    <strong>Fastest and Easiest</strong> way to Bid
                  </h3>
                  <Carousel>
                    <div>
                      <img src={Project2} />
                      <p className="legend">Project 2</p>
                    </div>
                    <div>
                      <img src={Project3} />
                      <p>Legend 3</p>
                      {/* <ul className="mb-0 list-unstyled w-100">
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
                          <i className="fas fa-check"></i>Takeoff Subscription
                          Plans
                        </li>
                        <li>
                          <i className="fas fa-check"></i>Project Leads, Plans
                          and Specs
                          <img
                            className="img-fluid"
                            src={FreeTag}
                            alt="Free Tag"
                          />
                        </li>
                      </ul> */}
                    </div>
                  </Carousel>

                  {/* <a className="thm-btn orange-btn-bg" href="#" title="">
                    Explore More<i className="fas fa-arrow-right"></i>
                  </a> */}
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
