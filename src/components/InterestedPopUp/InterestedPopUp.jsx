import React from "react";
import { Modal } from "react-bootstrap";
import "./InterestedPopUp.scss";

const InterestedPopUp = (props) => {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <div className="d-flex flex-column popup-content">
          <div className="pb-5">
            <h2 style={{ color: "#3A77F6" }}>I'm Interested</h2>
          </div>
          <div className="d-flex flex-column align-items-center">
            <input className="inputText" type="text" placeholder="Enter your Full Name..." />
            <input className="inputText" type="email" placeholder="Enter your email..." />
            <input className="inputText" type="text" placeholder="Enter your Phone Number..." />
            <textarea id="interestedTextArea" name="event" rows="4" placeholder="Tell us about your event and date." />
            <input className="submitButton" type="submit" value="Send" onClick={props.onHide} />
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default InterestedPopUp;
