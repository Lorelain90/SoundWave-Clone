import React from "react";
import './Nav.css';
import Logo1 from './images/logo.png';
import { Link, animateScroll as scroll } from "react-scroll";


const Nav = () => {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render(){
  return (
    <div className="nav">
      <div className="logo">
        <img className="Soundwave" src={Logo1} alt="Soundwave" ></img>
        <h3>Soundwave</h3>
      </div>
      <div className="barra">
        <a href="#Discover">Discover</a>
        <a href="#Join">Join</a>
      </div>
    </div>
  );
};
}

export default Nav;
