import './App.css';
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";

import NavbarWhite from '../components/navbar/NavbarWhite';
import Home from "../components/home/Home";
import Footer from "../components/footer/Footer";
import About from "../components/about/About";
import Timeline from "../components/timeline/Timeline";
import Portfolio from "../components/portfolio/Portfolio";
import Skills from "../components/skills/Skills";
import Contacts from "../components/contact/Contacts";


function App(props) {
  return (
    <React.Fragment>
      <div className="app">
        <header>
          <NavbarWhite />          
          <Home />
        </header>
        <main>
          <Portfolio />
          <Skills />
          <About />
          <Timeline />
          <Contacts />
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
