import React from 'react';

const ListYourSelf = (props) => {
  return (
    <section>
      <div className='listyourself w-100 pb-80 position-relative'>
        <div className='container'>
          <div className='sec-title position-relative text-center w-100'>
            <h2 className='mb-0' style={{color:'rgb(224, 153, 0)'}}>
              <strong>List Yourself</strong> With Us
            </h2>
          </div>
          <div className='list-wrap w-100'>
            <div className='row'>
              <div className='col-md-4 col-sm-6 col-lg-4'>
                <div className='list-box w-100'>
                  <div className='list-box-inner bg-color2 d-inline-block'>
                    <h4 className='mb-0'>
                      <strong>
                        General <br /> Contractor
                      </strong>{' '}
                      <br /> Listing
                    </h4>
                    <a
                      className='thm-btn orange-btn-bg'
                      href={() => false}
                      title=''
                    >
                      See More<i className='fas fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6 col-lg-4'>
                <div className='list-box w-100'>
                  <div className='list-box-inner bg-color2 d-inline-block'>
                    <h4 className='mb-0'>
                      <strong>
                        Sub <br />
                        Contractor
                      </strong>{' '}
                      <br /> Listing
                    </h4>
                    <a
                      className='thm-btn orange-btn-bg'
                      href={() => false}
                      title=''
                    >
                      See More<i className='fas fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className='col-md-4 col-sm-6 col-lg-4'>
                <div className='list-box w-100'>
                  <div className='list-box-inner bg-color2 d-inline-block'>
                    <h4 className='mb-0'>
                      <strong>Trade </strong>
                      <br /> Contractor
                      <br /> Listing
                    </h4>
                    <a
                      className='thm-btn orange-btn-bg'
                      href={() => false}
                      title=''
                    >
                      See More<i className='fas fa-arrow-right'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListYourSelf;
