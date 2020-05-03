import React, { Fragment } from 'react';
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services";
import About from "./components/About"
import Footer from "./components/Footer"

import './App.css';

function App() {
  return (
    <Fragment>
      <Navbar />
      <Landing />
      <Services />
      <Portfolio />
      <About />
      <Footer />
    </Fragment>
  );
}

export default App;
