import React from "react";
import Facebook from "./images/facebook.svg";
import Twitter from "./images/twitter.svg";
import { Link, animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <div className="Footer">
      <h4>About Us</h4>
      <h4>Contact</h4>
      <img src={Facebook} alt="Facebook" a href="https://www.facebook.com/" />
      <img
        src={Twitter}
        alt="Twitter"
        a
        href="https://twitter.com/home?lang=es"
      />
    </div>
  );
};

export default Footer;
