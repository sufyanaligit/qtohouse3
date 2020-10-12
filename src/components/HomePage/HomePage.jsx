import React, { useEffect } from 'react';
import Loader from '../Loader';
import EasiestBidSection from '../EasiestBidSection';
import CountsAndSliders from '../CountsAndSliders';
import FeatureProjects from '../FeatureProjects';
import ListYourSelf from '../ListYourSelf';
import WhyChooseQTO from '../WhyChooseQTO';
import FourStageProcess from '../FourStageProcess';

const HomePage = (props) => {
  const {
    getProjectsListBegin,
    currentProjectsCount,
    featureProjectsCount,
    loading,
  } = props;

  useEffect(() => {
    getProjectsListBegin();
  }, [getProjectsListBegin]);
  return (
    <>
      {loading && <Loader />}
      <EasiestBidSection />
      <CountsAndSliders
        currentProjectsCount={currentProjectsCount}
        featureProjectsCount={featureProjectsCount}
      />
      <WhyChooseQTO />
      <FeatureProjects />
      <FourStageProcess />
      <ListYourSelf />
    </>
  );
};

export default HomePage;
