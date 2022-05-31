import React from "react";
import './Nav.css';
import Logo1 from './images/logo.png';


const Nav = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={Logo1} alt="Soundwave"></img>
        <h1>Soundwave</h1>
      </div>
      <div className="barra">
        <a href="#Discover">Discover</a>
        <a href="#Join">Join</a>
      </div>
    </div>
  );
};

export default Nav;
