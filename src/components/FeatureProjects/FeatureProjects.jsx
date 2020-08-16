import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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
            <Carousel>
              <div>
                <img src={Project1} />
                <p className="legend">Project 1</p>
              </div>
              <div>
                <img src={Project2} />
                <p className="legend">Project 2</p>
              </div>
              <div>
                <img src={Project4} />
                <p className="legend">Project 3</p>
              </div>
            </Carousel>
          </div>
          <a className="thm-btn gold-btn-bg" href="#" title="">
            See More<i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeatureProjects;
