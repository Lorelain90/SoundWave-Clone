import React from "react";
import "./App.css";
import Nav from "./components/nav/Nav";
import Main from "./components/main/Main";
import Discover from "./components/nav/discover/Discover";
import Join from "./components/nav/Join";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Nav />
      <Main />
      <Nav />
      <Discover />
      <Footer />
      <Nav />
      <Join />
      <Footer />
    </>
  );
};

export default App;