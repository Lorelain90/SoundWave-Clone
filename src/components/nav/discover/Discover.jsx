import React from "react";
import Nav from "../Nav";
import Footer from "../../footer/Footer";
import Albums from "./albums.svg";
import Covers from "./covers.jpg";
import Micro from "./microphone.svg";
import More from "./more.svg";
//import { Link, animateScroll as scroll } from "react-scroll";

const Discover = () => {
  return (
    <>
      <h1>Discover new music</h1>
      <img className="micro" src={Micro} alt="Micro" />;
      <img className="albums" src={Albums} alt="Albums" />;
      <img className="more" src={More} alt="More" />;
      <img className="covers" src={Covers} alt="Covers" />;
      <p>
        By joining you can benefit by listening to the latest albums released.{" "}
      </p>
    </>
  );
};

export default Discover;
