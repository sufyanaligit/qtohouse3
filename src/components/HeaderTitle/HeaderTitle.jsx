import React from "react";
import Logo from '../../images/logo.png'

const HeaderTitle = () => {
  return (
    <header className="w-100">
      <div className="topbar bg-color2 w-100">
        <div className="container-fluid">
          <div className="row mrg align-items-center">
            <div className="col-md-6 col-sm-12 col-lg-6 text-left">
              <ul className="top-links d-inline-flex mb-0 list-unstyled w-100">
                <li>
                  <a href="#" title="">
                    Get your free Quantity TakeOff quote now!
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-sm-12 col-lg-6 text-right">
              <ul className="top-links d-inline-flex justify-content-end mb-0 list-unstyled w-100">
                <li>
                  <a href="#" title="">
                    <i className="fas fa-shopping-cart"></i>Cart
                    <span className="badge">0</span>
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <i className="fas fa-phone-alt"></i>1-718-717-2601
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <i className="fas fa-envelope"></i>
                  </a>
                </li>
                <li>
                  <a href="#" title="">
                    <i className="fas fa-lock"></i>Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="logo-menu w-100">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 col-sm-2">
              <div className="logo">
                <h1 className="mb-0">
                  <a href="index.html" title="Logo">
                    <img
                      className="img-fluid"
                      src={Logo}
                      alt="Logo"
                    />
                  </a>
                </h1>
              </div>
              <span className="menu-btn">
                <i className="fas fa-align-center"></i>
              </span>
            </div>
            <div className="col-md-10 col-sm-10">
              <div className="menu-wrap">
                <div className="logo">
                  <h1 className="mb-0">
                    <a href="index.html" title="Logo">
                      <img
                        className="img-fluid"
                        src={Logo}
                        alt="Logo"
                      />
                    </a>
                  </h1>
                </div>
                <span className="close-btn">
                  <i className="fas fa-times"></i>
                </span>
                <div className="row">
                  <div className="col-md-12 col-sm-12 col-lg-5">
                    <form className="header-search position-relative">
                      <input type="text" placeholder="Search projects" />
                      <button type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                    </form>
                  </div>
                  <div className="col-md-12 col-sm-12 col-lg-7">
                    <nav>
                      <ul className="d-inline-flex mb-0 list-unstyled">
                        <li>
                          <a href="#" title="">
                            Sample Project
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Plans
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Coverage Area
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Why Us
                          </a>
                        </li>
                        <li>
                          <a href="#" title="">
                            Contact Us
                          </a>
                        </li>
                      </ul>
                      <a
                        className="thm-btn blue-btn-bg"
                        href="#"
                        title=""
                      >
                        Register
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderTitle