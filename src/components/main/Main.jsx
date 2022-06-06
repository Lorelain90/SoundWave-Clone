import React from "react";
import "./Main.css";
import { Button } from "react-bootstrap";
import Girl from "./landing-page-girl.png";
import Cercle from "./cercle";
import { Link, animateScroll as scroll } from 'react-scroll';

const Main = () => {
  return (
    <div className="main">
      <img src={Girl} alt="Girl" className="" />
      <div className="eslogan">
        <h1>Feel The Music</h1>
        <p>Stream over 20 thousand song with one</p>
        <p>click</p>
      </div>

      <Button a href="#Join">
        Join Now
      </Button>
    </div>
  );
};

export default Main;

// position fix
//
