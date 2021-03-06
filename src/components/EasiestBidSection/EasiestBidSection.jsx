import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Project1 from '../../images/dashboard/BackgroundImage1.jpg';
import Project2 from '../../images/dashboard/BackgroundImage2.jpg';
import Project3 from '../../images/dashboard/BackgroundImage3.jpg';
import './EasiestBidSection.scss';

const EasiestBidSection = () => {
  return (
    <section>
      <div className='shape-right-top position-relative easiest-bid-section'>
        <div className='container'>
          <div className='row align-items-center'>
            <div className=''>
              <div className='mb'>
                <div className='intro-desc w-100'>
                  <Carousel showThumbs={false} dynamicHeight={true}>
                    <div className='carousel-container'>
                      <img src={Project1} alt='' />
                      <div
                        className='top-left'
                        style={{
                          background: 'black',
                          color: 'white',
                          opacity: '0.5',
                          top: '10%',
                          bottom: '10%',
                          padding: '2%',
                          left: '28%',
                          width: '43%',
                        }}
                      >
                        <h3 style={{ color: '#e09900', opacity: '1', textAlign: 'left' }}>
                          QTO House provides Quantity Take-offs for:
                          <br />
                          <br />
                          <ul>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              General Contractors
                            </li>
                            <li style={{ color: '#e09900', opacity: '1' }}>Sub-Contractors</li>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Construction Managers
                            </li>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Private Developers / Architects
                            </li>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Parks and Landscaping{' '}
                            </li>
                          </ul>
                        </h3>
                      </div>
                    </div>
                    <div>
                      <img src={Project2} alt='' />
                      <div
                        className='top-left'
                        style={{
                          background: 'black',
                          color: 'white',
                          opacity: '0.5',
                          top: '10%',
                          bottom: '10%',
                          padding: '2%',
                          left: '28%',
                          width: '43%',
                        }}
                      >
                        <h3 style={{ color: '#e09900', opacity: '1', textAlign: 'left' }}>
                          QTO House provides Quantity Take-offs for:
                          <br />
                          <br />
                          <ul>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Team of 25+ Civil Engineers
                            </li>
                            <li style={{ color: '#e09900', opacity: '1' }}>600+ Projects</li>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Yet to miss deadline in over four years
                            </li>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Take-off separated by each CSI division
                              (Sub-Contractors)
                            </li>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Residential Homes
                            </li>
                          </ul>
                        </h3>
                      </div>
                    </div>
                    <div>
                      <img src={Project3} alt='' />
                      <div
                        className='top-left'
                        style={{
                          background: 'black',
                          color: 'white',
                          opacity: '0.5',
                          top: '10%',
                          bottom: '10%',
                          padding: '2%',
                          left: '28%',
                          width: '43%',
                        }}
                      >
                        <h3 style={{ color: '#e09900', opacity: '1', textAlign: 'left' }}>
                          Quantity Take-offs for all types of Public and Private
                          projects:
                          <br />
                          <br />
                          <ul>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              New Multi Story Buildings
                            </li>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Renovation of Existing Buildings
                            </li>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Road and Highways
                            </li>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Subways and Station Renewals{' '}
                            </li>
                            <li style={{ color: '#e09900', opacity: '1' }}>
                              Bridges and tunnels modifications{' '}
                            </li>
                          </ul>
                        </h3>
                      </div>
                    </div>
                  </Carousel>

                  {/* <a className="thm-btn orange-btn-bg" href={() => false} title="">
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
