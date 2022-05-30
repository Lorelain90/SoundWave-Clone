import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './components/Nav';
import Main from './components/Main';
import Discover from './components/Discover';
import Join from './components/Join';
import Button from 'react-bootstrap/Button';


    function App () {
        return (  
    
    <>
        
        <Nav a href='#Nav'/> 
        <Main a href='#Main'/>
        <Discover a href='#Discover'/> 
        <Join a href='#Join'/>

    </>
      );
    }
    


export default App;

