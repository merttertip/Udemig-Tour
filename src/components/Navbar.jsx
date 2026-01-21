import React from "react";
import logo from "../assets/react.svg";
import PageLinks from "./PageLinks";
import { socialLinks } from "../data";
import SocialLink from "./SocialLink";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="nav-logo" />
          <button className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* sayfa linkleri */}
        <PageLinks parentClass="nav-links" itemClass="nav-link" />
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLink {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
