import React from 'react';

const WhyChooseQTO = (props) => {
  return (
    <section>
      <div className='listyourself w-100 pt-80 pb-80 position-relative'>
        <div className='container'>
          <div className='sec-title position-relative text-center w-100'>
            <h2 className='mb-0' style={{color:'rgb(224, 153, 0)'}}>
              Why Choose <strong>QTO House</strong>
            </h2>
          </div>
          <div className='serv-wrap w-100'>
            <div className='row'>
              <div className='col-md-6 col-sm-6 col-lg-4'>
                <div className='serv-box text-center w-100' style={{minHeight: '240px'}}>
                  <div className='mb-0' >
                    <h3 style={{color:'rgb(224, 153, 0)'}}>TRUSTWORTHY</h3>
                  </div>
                  <p className='mb-0' style={{color:'black'}}>
                    Our Construction Estimating service is based on an open,
                    honest approach to all projects that we are engaged in.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-sm-6 col-lg-4'>
                <div className='serv-box text-center w-100' style={{minHeight: '240px'}}>
                  {/* <img className="img-fluid" src={Two} alt="Service Image 2" /> */}
                  <div className='mb-0' >
                    <h3 style={{color:'rgb(224, 153, 0)'}}>EXPERIENCED</h3>
                  </div>
                  <p className='mb-0' style={{color:'black'}}>
                    With over 10 years combined experience as Quantity Surveyors
                    and Building Estimators, you can trust you are in safe
                    hands.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-sm-6 col-lg-4'>
                <div className='serv-box text-center w-100'  style={{minHeight: '240px'}}>
                  {/* <img className="img-fluid" src={Three} alt="Service Image 3" /> */}
                  <div className='mb-0'>
                    <h3 style={{color:'rgb(224, 153, 0)'}}>GUARANTEED</h3>
                  </div>

                  <p className='mb-0' style={{color:'black'}}>
                    We are yet to miss a client deadline in over 4 years of
                    producing Building Estimates, so rest assured we will always
                    meet your deadlines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseQTO;
