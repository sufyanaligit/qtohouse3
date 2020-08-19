import React from "react";
import Loader from "./components/Loader";
import HeaderTitle from "./components/HeaderTitle";
import EasiestBidSection from "./components/EasiestBidSection";
import CountsAndSliders from "./components/CountsAndSliders";
import FeatureProjects from "./components/FeatureProjects";
import ListYourSelf from "./components/ListYourSelf";
import WhyChooseQTO from "./components/WhyChooseQTO";
import FourStageProcess from "./components/FourStageProcess";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Loader />
      <HeaderTitle />
      <EasiestBidSection />
      <CountsAndSliders />
      <WhyChooseQTO />
      <FeatureProjects />
      <FourStageProcess />
      <ListYourSelf />
      <Footer />
    </>
  );
}

export default App;
