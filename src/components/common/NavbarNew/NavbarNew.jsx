import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
import "./NavbarNew.scss";
import Dehaze from "@material-ui/icons/Dehaze";
import { SvgIcon } from "@material-ui/core";
import DrawerMenu from "./DrawerMenu";

const NavbarNew = ({ handleShow }) => {
  const [sideMenu, setSideMenu] = useState(false);
  let openSideNav = () => {
    setSideMenu(true);
  };
  let closeSideMenu = () => {
    setSideMenu(false);
  };
  return (
    <React.Fragment>
      <header>
        <div className="row mx-0 justify-content-between align-items-center py-3">
          <div className="col-lg-3 col d-flex justify-content-between">
            <a href="/">
              <img src="images/Mixrre-logo.png" width="150px" />
            </a>
          </div>
          <div className="d-none col-lg-6 col d-lg-flex justify-content-end align-items-center menuItems">
            <a className="navItem" href="#work">
              How it works
            </a>
            <a className="navItem" href="mailto:contact@mixrre.com">
              Contact
            </a>
            <a className="btn signUp Button" onClick={handleShow}>
              Sign up
            </a>
          </div>
          <div className="col d-flex d-lg-none justify-content-end">
            {!sideMenu && (
              <div onClick={openSideNav}>
                <Dehaze className="dehazeIcon" />
              </div>
            )}
          </div>
        </div>
      </header>
      <DrawerMenu sideMenu={sideMenu} closeSideNav={closeSideMenu} handleShow={handleShow} />
    </React.Fragment>
  );
};

export default NavbarNew;
