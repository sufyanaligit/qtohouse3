import React from "react";
import Loader from "./components/Loader";
import HeaderTitle from "./components/HeaderTitle";
import EasiestBidSection from "./components/EasiestBidSection";
import CountsAndSliders from "./components/CountsAndSliders";
import QuantityTakeOff from "./components/QuantityTakeOff";
import ListYourSelf from "./components/ListYourSelf";
import WhyChooseQTO from "./components/WhyChooseQTO";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Loader />
      <HeaderTitle />
      <EasiestBidSection />
      <CountsAndSliders />
      <WhyChooseQTO />
      <QuantityTakeOff />
      <ListYourSelf />
      <Footer />
    </>
  );
}

export default App;
