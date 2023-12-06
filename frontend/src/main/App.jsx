import './App.css';
import React from 'react';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavbarWhite from '../components/navbar/NavbarWhite';
// import NavbarOverlaid from '../components/navbar/NavbarOverlaid';
import Home from "../components/home/Home";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import About from "../components/about/About";
// import Timeline from "../components/timeline/Timeline";
import Portfolio from "../components/portfolio/Portfolio";
import Contacts from "../components/contact/Contacts";


function App(props) {
  return (
    <React.Fragment>
      <div className="app">
        <header>
          <NavbarWhite />
          {/* <NavbarOverlaid /> */}
          <Home />
        </header>
        <main>
          <Gallery />
          <About />
          {/* <Timeline /> */}
          <Portfolio />
          <Contacts />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
