import React, { useState } from 'react';
import Loader from '../Loader';
import EasiestBidSection from '../EasiestBidSection';
import CountsAndSliders from '../CountsAndSliders';
import FeatureProjects from '../FeatureProjects';
import ListYourSelf from '../ListYourSelf';
import WhyChooseQTO from '../WhyChooseQTO';
import FourStageProcess from '../FourStageProcess';
const HomePage = () => {
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 2000);
  return (
    <>
      {loading && <Loader />}
      <EasiestBidSection />
      <CountsAndSliders />
      <WhyChooseQTO />
      <FeatureProjects />
      <FourStageProcess />
      <ListYourSelf />
    </>
  );
};

export default HomePage;
