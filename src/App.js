import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Discover from './components/Discover';
import Join from './components/Join';
import Footer from './components/Footer';
import Button from 'react-bootstrap/Button';

function App() {
  return (
  <>
    <Button>Prueba</Button>
    <Nav/> 
    <Main/>
    <Discover/> 
    <Join/>
    <Footer/>   
  </>
  
  );
}

export default App;

// a href='#Discover' className="img logo.png";
