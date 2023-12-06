import React from "react";
import "../../main/App.css";
import "./About.css";
import codeEye from "../../assets/code-eye2.jpg";
import codeLamp from "../../assets/code-lamp.jpg";

const About = props =>
    <div className="about-area container-fluid" id="about">
        <div className="about-flex row">
            <div className="about about-item">
                <h3 className="about-subtitle">ABOUT</h3>
                <p className="about-text">
                    Innovative and task-driven professional with 2 years of experience in web
                    design and development. I have solid knowledge of JavaScript and
                    Vue.js framework. As a web developer, I have officially been in
                    the job market for a year, but my learning and my first projects started
                    a little over a year ago. I started my career in the administration area,
                    working with finance, then I decided to start a business with 3D printing,
                    and finally, I discovered and fell in love with software development.
                </p>
            </div>
            <div className="about-item less-height">
                <img src={codeEye} alt="Codes in the eyes" />
            </div>
        </div>
        <div className="about-flex row">
            <div className="about-item display-none">
                <img src={codeLamp} alt="A lamp with codes inside" />
            </div>
            <div className="profile about-item" >
                <h3 className="profile-subtitle">PROFILE</h3>
                <ul className="profile-text">
                    <li><b className="purple-text">Name:</b> Maisa Pierini Preis</li>
                    <li><b className="purple-text">Age:</b> 28</li>
                </ul>
            </div>
        </div>
    </div>


export default About;