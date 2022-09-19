import React from "react";
import { Modal } from "react-bootstrap";
import "./SignUpPopup.scss";

export default function Popup(props) {
  return (
    <>
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img className="modalImage img-fluid" src="/images/Popup-Banner.png" alt="popup banner" />
          <div className="d-flex flex-column popup-content">
            <div>
              <h2>Don’t miss the updates from us!</h2>
              <p className="mb-0">
                We see you are excited to create your event. Right now, the engineering team is working hard to deliver a great product. We go live in <strong>September 2020</strong>. Enter your email
                to get updates.
              </p>
              <p className="pt-0">Thank You!</p>
            </div>
            <div className="d-flex flex-column align-items-center">
              <input className="emailInput" type="email" placeholder="Enter your email..." />
              <input className="emailSubmit" type="submit" value="Sign up" onClick={props.onHide} />
            </div>
          </div>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </>
  );
}
