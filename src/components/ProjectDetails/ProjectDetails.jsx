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
    <div className='project-details-container'>
      <h1>Project Details</h1>
      <div>
        <Descriptions
          column={2}
          bordered
          title=''
          size={'medium'}
          // extra={<Button type="primary">Edit</Button>}
        >
          <Descriptions.Item label='Solicitation'>
            {projectDetails.SLTN}
          </Descriptions.Item>
          <Descriptions.Item label='Bid Range'>
            {`$${projectDetails.BID_FROM}K-$${projectDetails.BID_TO}M`}
          </Descriptions.Item>
          <Descriptions.Item label='Bidding Method'>
            {projectDetails.BID_MTHD}
          </Descriptions.Item>
          <Descriptions.Item label='Location'>
            {projectDetails.LOC}
          </Descriptions.Item>
          <Descriptions.Item label='Bid Phase'>
            {projectDetails.BID_PHAS}
          </Descriptions.Item>
          <Descriptions.Item label='Completion Time'>
            {moment(projectDetails.CMPL_DTE).format('MMM-DD-YYYY')}
          </Descriptions.Item>
          <Descriptions.Item label='Liquidated Damages'>
            {projectDetails.LQUD_DMGS}
          </Descriptions.Item>
          <Descriptions.Item label='Pre-bid Meeting'>
            {projectDetails.PRE_BID_METG}
          </Descriptions.Item>
          <Descriptions.Item label='Notes'>
            {projectDetails.NOTE}
          </Descriptions.Item>

          <Descriptions.Item label='CSI Division'>
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
