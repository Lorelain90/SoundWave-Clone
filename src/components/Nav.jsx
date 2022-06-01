import React from "react";
import "./Nav.css";
import Logo1 from "./images/logo.png";

const Nav = () => {
  return (
    <div className="nav">
        <div href="./Main" className="logo">
          <img className="Soundwave" src={Logo1} alt="Soundwave"></img>
          <div href="#/Main">Soundwave</div>
        </div>

      <div className="barra">
          <div href="./Discover">Discover</div>
          <div href="./Join">Join</div>
      </div>
    </div>
    );
};

export default Nav;
