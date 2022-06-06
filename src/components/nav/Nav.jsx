import React from 'react';
import Discover from "./discover/Discover";
import Join from "./Join";
import { Container, Navbar } from "react-bootstrap";
import logo from "./logo.svg";

const Nav = () => {
  return (
    <>
      <Navbar className='nav'>
        <Container>
          <Navbar.Brand href="#main">
            <img
              alt="Soundwave Logo"
              src={logo}
              width="30"
              height="30"
              className="SoundLogo"></img>{" "}
            SoundWave
          </Navbar.Brand>
          <Navbar.Collapse>
            <Navbar.Text className="justify-content-end">
              <a href={Discover}>Discover</a>
            </Navbar.Text>
            <Navbar.Text className="justify-content-end">
              <a href={Join}>Join</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Nav;
