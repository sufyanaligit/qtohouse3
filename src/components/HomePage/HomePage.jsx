import React from "react";
import Loader from "../Loader";
import EasiestBidSection from "../EasiestBidSection";
import CountsAndSliders from "../CountsAndSliders";
import FeatureProjects from "../FeatureProjects";
import ListYourSelf from "../ListYourSelf";
import WhyChooseQTO from "../WhyChooseQTO";
import FourStageProcess from "../FourStageProcess";
const HomePage = (props) => {
  return (
    <>
      {/* <Loader /> */}
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
