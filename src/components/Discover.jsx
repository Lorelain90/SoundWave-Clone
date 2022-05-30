import React from 'react';
import Footer from './Footer';
import Albums from './images/albums.svg';
import Covers from './images/covers.jpg';
import Micro from './images/microphone.svg';
import More from './images/more.svg';

const Discover = () => {
    return (
    <>  "Discover"
    
            Discover new music
                <img src={Micro} alt="Micro"/>; 
                <img src={Albums} alt="Albums"/>; 
                <img src={More} alt="More"/>;

                <img src={Covers} alt="Covers"/>; 


            <Footer a href='#Footer'/>    
    </>
    );
}
 
export default Discover;