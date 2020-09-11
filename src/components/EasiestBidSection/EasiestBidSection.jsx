import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Project1 from "../../images/dashboard/BackgroundImage1.jpg";
import Project3 from "../../images/dashboard/BackgroundImage3.jpg";
import "./EasiestBidSection.scss";

const EasiestBidSection = () => {
  return (
    <section>
      <div className="shape-right-top position-relative easiest-bid-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="">
              <div className="mb">
                <div className="intro-desc w-100">
                  <Carousel showThumbs={false} dynamicHeight={true}>
                    <div className="carousel-container">
                      <img src={Project1} />
                      <div class="top-left">
                        <h1>
                          Some Description is to <br /> be displayed here. When
                          <br /> given by the client. So
                          <br /> we are waiting for now
                        </h1>
                      </div>
                    </div>
                    <div>
                      <img src={Project3} />
                      <div class="top-left">
                        <h1>
                          Some Description is to <br /> be displayed here. When
                          <br /> given by the client. So
                          <br /> we are waiting for now
                        </h1>
                      </div>
                    </div>
                  </Carousel>

                  {/* <a className="thm-btn orange-btn-bg" href="#" title="">
                    Explore More<i className="fas fa-arrow-right"></i>
                </a>*/}
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
