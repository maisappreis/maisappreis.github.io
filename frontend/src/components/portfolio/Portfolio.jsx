import React from "react";
import "../../main/App.css";
import bgProjects from "../../assets/bg-projects.jpg";
import "./Portfolio.css";

import lampPic from "../../assets/code-lamp-png.png";

const Portfolio = props =>
    <section id="portfolio">
        <div className="projects-area">
            <img id="bg-image" src={bgProjects} alt="Purple background" />
            <div className="projects-overlay">
                <div className="projects-subtitle">
                    <h3>PORTFOLIO</h3>
                </div>
                <div className="projects-flex">
                    <div id="proj-item">
                        <img src={lampPic} alt="Lamp" />
                    </div>
                    <div id="proj-item">
                        <img src={lampPic} alt="Lamp" />
                    </div>
                    <div id="proj-item">
                        <img src={lampPic} alt="Lamp" />
                    </div>
                </div>
            </div>
        </div>
    </section>

export default Portfolio;