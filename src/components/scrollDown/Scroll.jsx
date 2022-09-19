import React, { Component } from "react";
import "./Scroll.scss";

class Scroll extends Component {
  scrollDown = () => {
    let height = window.innerHeight;
    window.scrollTo({ top: height * 1.2, behavior: "smooth" });
  };
  render() {
    const { handleShow } = this.props;
    return (
      <div id="scroll">
        <div className="row">
          <div className="col-md-6 offset-md-3 button-group d-flex justify-content-between align-items-center">
            <div>
              <p className="optionsLabel mb-1">Type of Event</p>
              {/* <br /> */}
              <select name="typeOfEvent" id="typeOfEvent" className="dropDownList">
                <option value="Wedding">Wedding</option>
                <option value="Conference">Conference</option>
                <option value="Cocktail">Cocktail</option>
                <option value="Fundraiser">Fundraiser</option>
                <option value="Soiree">Soiree</option>
                <option value="Banquets">Banquets</option>
              </select>
            </div>
            <div className="vl"></div>
            <div>
              <p className="optionsLabel mb-1">Goal of Event</p>
              <select name="goalOfEvent" id="goalOfEvent" className="dropDownList">
                <option value="Exciting">Exciting</option>
                <option value="Fun">Fun</option>
                <option value="Entertaining">Entertaining</option>
                <option value="Lively">Lively</option>
                <option value="Social">Social</option>
                <option value="Social">Celebratory</option>
                <option value="Social">Memorable</option>
              </select>
            </div>
            <div onClick={handleShow} className="check d-flex align-items-center justify-content-center">
              <p>
                Make it happen <i className="fa fa-check"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="row text-center justify-content-center mt-5">
          <div className="col-sm-2 col-4 scrollDown" onClick={this.scrollDown}>
            <img src="images/mouse.jpg" alt="mouse" />
            <p>Scroll Down</p>
          </div>
        </div>
        <div className="img-group row d-flex align-items-center" style={{ margin: "0" }}>
          <div className="col-md-5" style={{ padding: "0" }}>
            <img src="images/organize.png" className="image img-fluid" alt="organize" />
          </div>
          <div className="col-md-3">
            <h3>Get Organized</h3>
            <p>Keep your guest updated with your event and programs, before and on the day of the event in real-time.</p>
          </div>
          <div className="col-md-3 dots align-self-top d-none d-md-block">
            <img src="images/GetOrganizedDots.png" className="img-fluid" alt="get organized dots" />
          </div>
        </div>

        <div className="img-group row d-flex align-items-center">
          <div className="col-md-3 pl-5 dots align-self-end d-md-flex justify-content-end d-none d-md-block">
            <img src="images/GetSocialDots.png" className="img-fluid" alt="get social dots" />
          </div>
          <div className="col-md-4 d-none d-md-block py-2">
            <h3>Get Social</h3>
            <p>Give your guest a new type of event experience by allowing them interact and share precious moments with you and other invited guests.</p>
          </div>
          <div className="col-md-5 text-right" style={{ padding: "0" }}>
            <img src="images/social.png" className="image img-fluid" alt="get social dots" />
          </div>
          <div className="col-12 d-block d-md-none">
            <h3>Get Social</h3>
            <p>Give your guest a new type of event experience by allowing them interact and share previous moments with you and other invited guests.</p>
          </div>
        </div>

        <div className="img-group row d-flex align-items-center" style={{ margin: "0" }}>
          <div className="col-md-5" style={{ padding: "0" }}>
            <img src="images/fun.png" className="image img-fluid" alt="fun" />
          </div>
          <div className="col-md-3">
            <h3>Have Fun</h3>
            <p>That's the point of your event right, create it and let the party begin.</p>
          </div>
          <div className="col-md-3 dots align-self-top d-none d-md-block">
            <img src="images/HaveFunDots.png" className="img-fluid" alt="get have fun dots" />
          </div>
        </div>
      </div>
    );
  }
}
export default Scroll;
