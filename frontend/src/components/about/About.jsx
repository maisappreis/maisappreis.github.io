import React from "react";
import "../../main/App.css";
import "./About.css";
import codeLamp from "../../assets/code-lamp.png";


const About = props =>
    <div className="about-area container-fluid" id="about">
        <div className="about-flex row">
            <div className="about about-item">
                <h3 className="about-subtitle">ABOUT ME</h3>
                <hr className="line"/>
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
            <img className="img-item" src={codeLamp} alt="Code Lamp" />
            <div className="about-item-right"></div>
        </div>
    </div>


export default About;