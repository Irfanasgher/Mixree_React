import React from "react";
// import Navbar from "./../common/navbar/Navbar";
import NavbarNew from "./../common/NavbarNew/NavbarNew";
import Banner from "./../banner/Banner";
import Footer from "./../common/footer/Footer";
// import Happiness from "./../happiness/Happiness";
import Experience from "./../experience/Experience";
import Scroll from "./../scrollDown/Scroll";
import HowItWork from "./../howItWork/HowItWork";
import Customer from "./../customer/Customer";
const LandingPage = ({ handleShow, showInterested }) => {
  return (
    <React.Fragment>
      {/* <Navbar handleShow={handleShow} /> */}
      <NavbarNew handleShow={handleShow} />
      <Banner />
      <Scroll handleShow={showInterested} />
      <HowItWork />
      <Customer />
      <Experience />
      {/* <Happiness /> */}
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
