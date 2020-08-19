import React from "react";
import WhyUsIcon from "../../images/resources/why-us-icon1.png";
import WhyUsIcon2 from "../../images/resources/why-us-icon2.png";
import WhyUsIcon3 from "../../images/resources/why-us-icon3.png";
import Brand1 from "../../images/resources/brands/CUNY.png";
import Brand2 from "../../images/resources/brands/DASNY.png";
import Brand3 from "../../images/resources/brands/Department_of_Correction.jpg";
import Brand4 from "../../images/resources/brands/DSNY.jpg";
import Brand5 from "../../images/resources/brands/FBO.png";
import Brand6 from "../../images/resources/brands/FDNY.png";
import Brand7 from "../../images/resources/brands/MTA_MNR.jpg";
import Brand8 from "../../images/resources/brands/NYC_HHC.png";
import Brand9 from "../../images/resources/brands/NYC_PARKS.jpg";
import Brand10 from "../../images/resources/brands/NYCDDC.png";
import Brand11 from "../../images/resources/brands/NYCDEP.png";
import Brand12 from "../../images/resources/brands/NYCEDC.png";
import Brand13 from "../../images/resources/brands/NYCHA.png";
import Brand14 from "../../images/resources/brands/NYCSCA.jpg";
import Brand15 from "../../images/resources/brands/NYSDOT.jpg";
import Brand16 from "../../images/resources/brands/NYSERDA.jpg";
import Brand17 from "../../images/resources/brands/NYSOGS.png";
import Brand18 from "../../images/resources/brands/PANYNJ.png";
import Brand19 from "../../images/resources/brands/SUNY.jpg";

const CountsAndSliders = (props) => {
  return (
    <section>
      <div className="w-100 bg-color2 position-relative">
        <div className="container">
          <div className="why-us text-center w-100">
            <div className="row justify-content-center">
              <div className="col-md-4 col-sm-4 col-lg-4">
                <div className="why-us-box w-100">
                  <a className="d-inline-block" href="#" title="">
                    <img
                      className="img-fluid"
                      src={WhyUsIcon}
                      alt="Why Us Icon 1"
                    />
                    <h2 className="mb-0 counter">59</h2>
                    <h5 className="mb-0">Current Projects</h5>
                    {/* Upon clicking,open current project page */}
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-lg-4">
                <div className="why-us-box w-100">
                  <a className="d-inline-block" href="#" title="">
                    <img
                      className="img-fluid"
                      src={WhyUsIcon2}
                      alt="Why Us Icon 2"
                    />
                    <h2 className="mb-0 counter">94</h2>
                    <h5 className="mb-0">Previous Projects</h5>
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-sm-4 col-lg-4">
                <div className="why-us-box w-100">
                  <a className="d-inline-block" href="#" title="">
                    <img
                      className="img-fluid"
                      src={WhyUsIcon3}
                      alt="Why Us Icon 3"
                    />
                    <h2 className="mb-0 counter">66</h2>
                    <h5 className="mb-0">Award</h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100 pt-60 position-relative">
        <div className="container ">
          <div className="brands-caro">
            <div className="brand-img">
              <img className="img-fluid" src={Brand1} alt="Brand Image 1" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand2} alt="Brand Image 2" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand3} alt="Brand Image 3" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand4} alt="Brand Image 4" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand5} alt="Brand Image 5" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand6} alt="Brand Image 6" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand7} alt="Brand Image 7" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand8} alt="Brand Image 8" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand9} alt="Brand Image 9" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand10} alt="Brand Image 10" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand11} alt="Brand Image 11" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand12} alt="Brand Image 12" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand13} alt="Brand Image 13" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand14} alt="Brand Image 14" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand15} alt="Brand Image 15" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand16} alt="Brand Image 16" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand17} alt="Brand Image 17" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand18} alt="Brand Image 18" />
            </div>
            <div className="brand-img">
              <img className="img-fluid" src={Brand19} alt="Brand Image 19" />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default CountsAndSliders;
