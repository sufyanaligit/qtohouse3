import React from 'react';
import Logo from '../../images/logo.png';

const Footer = (props) => {
  return (
    <footer>
      <div className='footer-wrap w-100 bg-color6 pb-10 position-relative'>
        <div className='container-fluid'>
          <div className='footer-inner w-100'>
            <div className='row'>
              <div className='col-md-6 col-sm-12 col-lg-6'>
                <div className='footer-logo'>
                  <a href={() => false} title='Home'>
                    <img src={Logo} alt='Logo' />
                  </a>
                </div>
                <ul className='cont-info mb-0 list-unstyled w-100'>
                  <li>
                    <img
                      className='img-fluid'
                      src='assets/images/truebid-icon.png'
                      alt='True Bid Icon'
                    />
                    Qto Inc.
                  </li>
                  {/* <li>
                    <i className="fas fa-map-marker-alt"></i>99 Wall Street,
                    Suite 556 New York, NY, 10005
                  </li> */}
                  <li>
                    <i className='fas fa-mobile-alt'></i>
                    <a href={() => false} title=''>
                      (571)-748-4366
                    </a>
                  </li>
                  <li>
                    <i className='far fa-envelope'></i>
                    <a href={() => false} title=''>
                      info@qtohouse.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className='col-md-6 col-sm-12 col-lg-6 text-right order-md-1'>
                <div className='footer-search'>
                  <div className='social-links d-inline-flex flex-wrap'>
                    <a
                      href={() => false}
                      title=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-facebook-f'></i>
                    </a>
                    <a
                      href={() => false}
                      title=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-instagram'></i>
                    </a>
                    <a
                      href={() => false}
                      title=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-twitter'></i>
                    </a>
                    <a
                      href={() => false}
                      title=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-youtube'></i>
                    </a>
                    <a
                      href={() => false}
                      title=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-linkedin-in'></i>
                    </a>
                    <a
                      href={() => false}
                      title=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-pinterest'></i>
                    </a>
                    <a
                      href={() => false}
                      title=''
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='fab fa-blogger'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='copyright text-center w-100'>
            <p className='mb-0'>© 2020 QTO HOUSE - ALL RIGHTS RESERVED. </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
