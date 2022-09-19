import React, { Component } from "react";
import "./Banner.scss";
class banner extends Component {
  render() {
    return (
      <div id="banner" className="d-flex flex-column justify-content-center align-items-center">
        <h5>
          Curate a wonderful event
          <br className="d-md-block d-none" /> experience for you and your
          <br className="d-md-block d-none" /> amazing guests
        </h5>
        <p className="mt-3">Create your own beautiful dream event in just minutes</p>
        <div className="mt-4">
          <img src="images/btnGPlay.jpg" style={{ borderRadius: "5px" }} />
          <img className="ml-5" src="images/btnAppStore.jpg" style={{ borderRadius: "5px" }} />
        </div>
      </div>
    );
  }
}
export default banner;
