import React from "react";
import "../../main/App.css";
import "./Portfolio.css";
import lampPic from "../../assets/code-lamp-png.png";

const Portfolio = props =>
    <section id="portfolio">
        <div className="portfolio-area projects-area">
            <div className="projects-overlay">
                <h3 className="projects-subtitle">PORTFOLIO</h3>
                <div className="projects-flex">
                    <img className="proj-img" src={lampPic} alt="Lamp" />
                    <img className="proj-img" src={lampPic} alt="Lamp" />
                    <img className="proj-img" src={lampPic} alt="Lamp" />
                </div>
            </div>
        </div>
    </section>

export default Portfolio;