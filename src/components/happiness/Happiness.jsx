import React, { Component } from "react";
import "./Happiness.scss";
class Happiness extends Component {
  render() {
    return (
      <div id="happiness" className="py-5">
        <div className="row my-5">
          <div className="col-md-4 offset-md-1 d-flex flex-column justify-content-center">
            <h1>
              <label>Join with</label> happiness
              <br /> <label>users around the world</label>
            </h1>
            <p>Share and see things happening all around your event</p>
            <form style={{ width: "80%" }}>
              <div class="input-group my-3">
                <input type="text" class="form-control" placeholder="Enter your email..." />
                <div class="input-group-prepend">
                  <span class="input-group-text" style={{ backgroundColor: "#FACA43", fontWeight: "500" }}>
                    Sign up
                  </span>
                </div>
              </div>
            </form>
          </div>
          <div className="col-md-6 offset-md-1 d-md-block d-none">
            <img src="images/happiness.jpg" height="400" />
          </div>
        </div>
      </div>
    );
  }
}
export default Happiness;
