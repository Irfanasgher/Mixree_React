import React, { useState } from "react";
import "./App.css";
import LandingPage from "./components/LandingPage/LandingPage";
import SignUpPopUp from "./components/SignUpPopup/SignUpPopup";
import InterestedPopUp from "./components/InterestedPopUp/InterestedPopUp";

function App() {
  const [show, setShow] = useState(false);
  const [interestedPopUpShow, setInterestedPopUpShow] = useState(false);

  const onInterestPopHide = () => setInterestedPopUpShow(false);
  const onInterestPopShow = () => setInterestedPopUpShow(true);

  const onSignUpPopUpHide = () => setShow(false);
  const onSignUpPopUpShow = () => setShow(true);
  return (
    <div className="App">
      <LandingPage showInterested={onInterestPopShow} handleShow={onSignUpPopUpShow} />
      <SignUpPopUp show={show} onHide={onSignUpPopUpHide} />
      <InterestedPopUp show={interestedPopUpShow} onHide={onInterestPopHide} />
    </div>
  );
}

export default App;
