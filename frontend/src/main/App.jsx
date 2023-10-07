import './App.css';
import React from 'react';

import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";


import Navbar from '../components/navbar/Navbar';
import Header from "../components/templete/Header";
import Main from "../components/templete/Main";
import Footer from "../components/templete/Footer";


function App(props) {
  return (
    <React.Fragment>
      <div className="app">
        <Navbar />
        <Header />
        <Main />   
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
