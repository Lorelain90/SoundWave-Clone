import React from "react";
import "./Join.css";
import Nav from "./Nav";
import Footer from '../footer/Footer'
import { Button } from "react-bootstrap";
//import { Link, animateScroll as scroll } from 'react-scroll';

const join = () => {
  return (
    <div className="main">
      <h1> Seccion Join</h1>
      <Button>Sign Up</Button>

      <Footer></Footer>
    </div>
  );
};

export default join;
