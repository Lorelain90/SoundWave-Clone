import React from "react";
import { Button } from 'react-bootstrap';
import Girl from "./images/landing-page-girl.png";
import { Link, animateScroll as scroll } from "react-scroll";

const Main = () => {
  return (
    <div className="main">
      <div className="girl">
        <img src={Girl} alt="Girl" />
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
