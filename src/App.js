import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Discover from "./components/Discover";
import Join from "./components/Join";
//import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Discover />
      <Join />
    </>
  );
}

export default App;
