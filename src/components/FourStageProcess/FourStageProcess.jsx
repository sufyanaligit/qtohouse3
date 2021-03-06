import React from 'react';
import Mail from '../../images/mail.png';
import Two from '../../images/edit.png';
import Three from '../../images/money-back.png';
import Like from '../../images/like.png';
import './FourStageProcess.scss';

const FourStageProcess = (props) => {
  return (
    <section className='four-stage-process-container'>
      <div className='w-100 pt-80 pb-80 position-relative'>
        <div className='container'>
          <div className='sec-title position-relative text-center w-100'>
            <h2 className='mb-0'>
              <p style={{color:'rgb(224, 153, 0)'}}>
              OUR 4 STAGE PROCESS MAKES OUR <br />
              <strong>ESTIMATION SERVICE SIMPLE</strong></p>
            </h2>
          </div>
          <div className='serv-wrap w-100'>
            <div className='row'>
              <div className='col-md-3 col-sm-3 col-lg-3'>
                <div className='serv-box text-center w-100' style={{height: '440px'}}>
                  <span className='four-stage-process-label'>
                    Initial Stage
                  </span>
                  <img
                    className='img-fluid'
                    src={Mail}
                    alt=''
                    style={{ width: '100px' }}
                  />
                  <h3
                    className='mb-0'
                    style={{ fontWeight: '500', color: 'rgb(224, 153, 0)' }}
                  >
                    SEND PLANS
                  </h3>
                  <p className='mb-0' style={{color:'black'}}>
                    Its easy simply E mail or post your plans and any other
                    relevant project documents to us.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-sm-6 col-lg-3'>
                <div className='serv-box text-center w-100' style={{height: '440px'}}>
                  <span className='four-stage-process-label'>Second Stage</span>
                  <img
                    className='img-fluid'
                    src={Two}
                    alt=''
                    style={{ width: '100px' }}
                  />

                  <h3
                    className='mb-0'
                    style={{ fontWeight: '490', color: 'rgb(224, 153, 0)' }}
                  >
                    RECEIVE QUOTATION
                  </h3>

                  <p className='mb-0' style={{color:'black'}}>
                    On receipt of your plans we will provide you with a fixed
                    priced quotation for producing your estimate .
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-sm-6 col-lg-3'>
                <div className='serv-box text-center w-100' style={{height: '440px'}}>
                  <span className='four-stage-process-label'>Third Stage</span>
                  <img
                    className='img-fluid'
                    src={Three}
                    alt=''
                    style={{ width: '100px' }}
                  />

                  <h3
                    className='mb-0'
                    style={{ fontWeight: '500', color: 'rgb(224, 153, 0)' }}                    
                  >
                    MAKE PAYMENT
                  </h3>

                  <p className='mb-0' style={{color:'black'}}>
                    Using our simple and secure payment system, make payment for
                    your estimate.
                  </p>
                </div>
              </div>
              <div className='col-md-6 col-sm-6 col-lg-3'>
                <div className='serv-box text-center w-100' style={{height: '440px'}}>
                  <span className='four-stage-process-label'>FINAL STAGE</span>
                  <img
                    className='img-fluid'
                    src={Like}
                    alt=''
                    style={{ width: '100px' }}
                  />
                  <h3
                    className='mb-0'
                    style={{ fontWeight: '500', color: 'rgb(224, 153, 0)' }}
                  >
                    RECEIVE ESTIMATE
                  </h3>

                  <p className='mb-0' style={{color:'black'}}>
                    Within 5 working days your estimate report will be e mailed
                    back to you in both PDF and Excel format.
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

export default FourStageProcess;
