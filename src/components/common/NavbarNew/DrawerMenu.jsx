import React from "react";
import "./DrawerMenu.scss";

const Drawer = ({ sideMenu, closeSideNav, handleShow }) => {
  let howItWorks = (e) => {
    closeSideNav();
    e.preventDefault();
    window.location.href = "#work";
  };
  let mailTo = (e) => {
    closeSideNav();
    e.preventDefault();
    window.location.href = "mailto:contact@mixrre.com";
  };
  return (
    <div id="mySideNav" style={{ width: `${sideMenu ? "200px" : "0px"}` }} className="sidenav d-lg-none">
      <a className="closebtn" onClick={closeSideNav}>
        &times;
      </a>
      <a className="sideNavItem" onClick={howItWorks}>
        How it works
      </a>
      <a className="sideNavItem" onClick={mailTo}>
        Contact
      </a>
      <a className="btn sideNavSignUp mr-4 my-3" onClick={handleShow}>
        Sign up
      </a>
    </div>
  );
};

export default Drawer;
