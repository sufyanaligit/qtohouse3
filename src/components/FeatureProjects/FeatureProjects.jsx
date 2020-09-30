import React from "react";
import Project1 from "../../images/feature-projects/project1.jpg";
import Project2 from "../../images/feature-projects/project2.png";
import Project4 from "../../images/feature-projects/project4.jpg";
const FeatureProjects = (props) => {
  return (
    <section>
      <div className="quantitytakseoff w-100 shape-left-pattern position-relative">
        <div className="container">
          <div className="sec-title position-relative text-center w-100">
            <h2 className="mb-0">
              <strong>Feature Projects</strong>
            </h2>
          </div>
          <div className="serv-wrap w-100">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="col-lg-12">
                  <img
                    className="img-fluid"
                    src={Project1}
                    alt="Service Image 1"
                    style={{ height: "350px" }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="col-lg-12">
                  {/* <span className="d-block">Recommended</span> */}
                  <img
                    className="img-fluid"
                    src={Project2}
                    alt="Service Image 2"
                    style={{ height: "350px" }}
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-6 col-lg-4">
                <div className="col-lg-12">
                  <img
                    className="img-fluid"
                    src={Project4}
                    alt="Service Image 3"
                    style={{ height: "350px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 10 }}>
            <a className="thm-btn gold-btn-bg" href="#" title="">
              See More<i className="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FeatureProjects;
