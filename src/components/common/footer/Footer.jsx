import React, { Component } from "react";
// import { Link } from 'react-router-dom';

import "./Footer.scss";
class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <div className="container mt-5">
          <div className="d-flex flex-row justify-content-between pt-5 row">
            <div className="estimated pt-5 pb-5 col-md-3 col-12">
              <h1>Mixrre</h1>
            </div>
            <div className="estimated pt-5 pb-5  ml-none col-md-3 col-12">
              <ul>
                <li>
                  <a href="#work">How it works</a>
                </li>
                <li>
                  <a href="mailto:contact@mixrre.com">Contact</a>
                </li>
                {/* <li>
                  <Link to={'/opportunities'}>
                  Download
                  </Link>
                </li> */}
              </ul>
            </div>
            <div className="estimated pt-5 pb-5 col-md-3 col-12 d-none d-md-block">{/* <ul >
								<li>Blog</li>
								<li>Terms of Services</li>
							</ul> */}</div>
            <div className="estimated pt-5 pb-5 col-md-3 col-12">
              <ul>
                <li>contact@mixrre.com</li>
                <div className="icon mt-3">
                  <a target="_blank" rel="noopener noreferrer" href={"https://web.facebook.com/Mixrre-106423761123287"}>
                    <i className="fa fa-facebook icon1" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={"https://twitter.com/_mixrre"}>
                    <i className="fa fa-twitter icon1" />
                  </a>
                  <a target="_blank" rel="noopener noreferrer" href={"https://www.instagram.com/mixrre/"}>
                    <i className="fa fa-instagram icon1" />
                  </a>
                </div>
              </ul>
            </div>
            <p className="d-flex justify-content-center col-md-12 col-12 p-3 m-2" style={{ alignItems: "center", color: "white", fontSize: "12px" }}>
              Copyright &copy; 2020 Mixrre. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
