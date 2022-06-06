import React from "react";
import "./Main.css";
import { Button } from "react-bootstrap";
import Girl from "./landing-page-girl.png";
//import { Link, animateScroll as scroll } from 'react-scroll';

const Main = () => {
  return (
    <div className="main">
      <div className="1">
        <img src={Girl} alt="Girl" className="girl" />
      </div>
      <div className="2">
        <h1>Feel The Music</h1>
      </div>
      <p>Stream over 20 thousand song with one</p>
      <p>click</p>

      <Button a href="#Join">
        Join Now
      </Button>
    </div>
  );
};

export default Main;

// position fix
//
