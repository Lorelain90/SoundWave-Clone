import React from 'react';
import Footer from './Footer';
import Albums from './images/albums.svg';
import Covers from './images/covers.jpg';
import Micro from './images/microphone.svg';
import More from './images/more.svg';
//import { Link, animateScroll as scroll } from "react-scroll";


const Discover = () => {
    return (
    <>  
    
            <h1>Discover new music</h1>
                <img className='micro' src={Micro} alt="Micro"/>; 
                <img className='albums' src={Albums} alt="Albums"/>; 
                <img className='more' src={More} alt="More"/>;

                <img className='covers' src={Covers} alt="Covers"/>; 
                <p>By joining you can benefit by listening to the latest albums released. </p>
                
            <Footer a href='#Footer'/>    
    </>
    );
}
 
export default Discover;