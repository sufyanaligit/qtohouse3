import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Descriptions, Spin } from 'antd';
import './ProjectDetails.scss';

const ProjectDetails = (props) => {
  const { match, getProjectDetails, projectDetails } = props;
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getProjectDetails(match.params.id);
  }, [getProjectDetails, match.params.id]);

  if (projectDetails.PRJT_ID && isLoading) {
    setIsLoading(false);
  }
  if (isLoading)
    return (
      <div className='spin-container'>
        <Spin />
      </div>
    );
  return (
    <div className='project-details-container' >
      <h1 style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'large', fontWeight:'bold'}}>Project Details</h1>
      <div >

        <Descriptions
          column={2}
          bordered
          title=''
          size={'medium'}
          // extra={<Button type="primary">Edit</Button>}
        >
          <Descriptions.Item label='Solicitation' style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'14px'}}>
            {projectDetails.SLTN}
          </Descriptions.Item>
          <Descriptions.Item label='Bid Range' style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'14px'}}>
            {`$${projectDetails.BID_FROM}K-$${projectDetails.BID_TO}M`}
          </Descriptions.Item>
          <Descriptions.Item label='Bidding Method' style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'14px'}}>
            {projectDetails.BID_MTHD}
          </Descriptions.Item>
          <Descriptions.Item label='Location' style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'14px'}}>
            {projectDetails.LOC}
          </Descriptions.Item>
          <Descriptions.Item label='Bid Phase' style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'14px'}}>
            {projectDetails.BID_PHAS}
          </Descriptions.Item>
          <Descriptions.Item label='Completion Time' style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'14px'}}>
            {moment(projectDetails.CMPL_DTE).format('MMM-DD-YYYY')}
          </Descriptions.Item>
          <Descriptions.Item label='Liquidated Damages' style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'14px'}}>
            {projectDetails.LQUD_DMGS}
          </Descriptions.Item>
          <Descriptions.Item label='Pre-bid Meeting' style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'14px'}}>
            {projectDetails.PRE_BID_METG}
          </Descriptions.Item>
          <Descriptions.Item label='Notes' style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'14px'}}>
            {projectDetails.NOTE}
          </Descriptions.Item>

          <Descriptions.Item label='CSI Division' style={{fontFamily:'Open Sans,sans-serif', color:'rgb(224, 153, 0)', fontSize:'14px'}}>
            {projectDetails.CsiDivision &&
              projectDetails.CsiDivision.map((csiDivision, index) => {
                return (
                  <span key={index}>
                    {`${csiDivision.DVSN_NO} - ${csiDivision.NME}`}
                    <br />
                  </span>
                );
              })}
          </Descriptions.Item>
        </Descriptions>
      </div>
    </div>
  );
};

export default ProjectDetails;
