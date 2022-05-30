import React from 'react';
import Button from 'react-bootstrap/Button';
import Logo1 from './images/logo.png';
import Discover from './Discover';
import Join from './Join';


const Nav = () => {
    return (
    <> "Nav"
        <img src={Logo1}></img>
        Soundwave
        <Discover/>
        <Join/>
        <Button>Join</Button>
    </>
    );
}
 
export default Nav;