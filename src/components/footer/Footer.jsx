import React from "react";
import './Footer.css';
import Facebook from "./facebook.svg";
import Twitter from "./twitter.svg";

const Footer = () => {
  return (
    <div className="Footer">
      <h4>About Us</h4>
      <h4>Contact</h4>
      <img
        className="facebook"
        href="https://www.facebook.com/"
        src={Facebook}
        alt="Facebook"
      />
      <img
        className="twitter"
        href="https://twitter.com/home?lang=es"
        src={Twitter}
        alt="Twitter"
      />
    </div>
  );
};

export default Footer;
