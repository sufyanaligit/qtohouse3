import React from "react";
import Logo from '../../images/logo.png'

const Footer = (props) => {
  return (
    <footer>
      <div className="footer-wrap w-100 bg-color6 pb-10 position-relative">
        <div className="container-fluid">
          <div className="footer-inner w-100">
            <div className="row">
              <div className="col-md-6 col-sm-12 col-lg-6">
                <div className="footer-logo">
                  <a href="index.html" title="Home">
                    <img src={Logo} alt="Logo" />
                  </a>
                </div>
                <ul className="cont-info mb-0 list-unstyled w-100">
                  <li>
                    <img
                      className="img-fluid"
                      src="assets/images/truebid-icon.png"
                      alt="True Bid Icon"
                    />
                    True Bid Data Inc.
                  </li>
                  <li>
                    <i className="fas fa-map-marker-alt"></i>99 Wall Street, Suite
                    556 New York, NY, 10005
                  </li>
                  <li>
                    <i className="fas fa-mobile-alt"></i>
                    <a href="#" title="">
                      1-718-717-2601
                    </a>
                  </li>
                  <li>
                    <i className="far fa-envelope"></i>
                    <a href="#" title="">
                      sales@truebiddata.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-sm-12 col-lg-6 text-right order-md-1">
                <div className="footer-search">
                  <div className="social-links d-inline-flex flex-wrap">
                    <a href="" title="" target="_blank">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="" title="" target="_blank">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="" title="" target="_blank">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="" title="" target="_blank">
                      <i className="fab fa-youtube"></i>
                    </a>
                    <a href="" title="" target="_blank">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a href="" title="" target="_blank">
                      <i className="fab fa-pinterest"></i>
                    </a>
                    <a href="" title="" target="_blank">
                      <i className="fab fa-blogger"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright text-center w-100">
            <p className="mb-0">
              &copy; Copyright 2020 True Bid Data Inc. All rights reserved.
              Version 1.0.0.2
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
