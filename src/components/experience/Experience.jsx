import React, { Component } from "react";
import "./Experience.scss";

class Experience extends Component {
  render() {
    return (
      <div id="experience" className="d-flex justify-content-center align-items-center flex-column my-5">
        <h1 className="pt-5">Create an ultra-modern experience for your guests</h1>
        <p>
          We want to curate a new type of experience for your guest. Elevate their experience by <br className="d-md-block d-none" /> turning your event into a mixrre.
        </p>
        <div className="mt-5 text-center">
          <a href="#">
            <img src="images/btnGPlayb.png" style={{ borderRadius: "5px" }} alt="btn Play Store" />
          </a>
          <a href="#">
            <img className="ml-5" src="images/btnAppStoreb.png" alt="btn App Store" style={{ borderRadius: "5px" }} />
          </a>
        </div>
        <div className="text-center mt-4 row justify-content-center">
          <div className="col-md-6 col-9">
            <img src="images/experience.png" width="100%" alt="experience" />
          </div>
        </div>
      </div>
    );
  }
}
export default Experience;
