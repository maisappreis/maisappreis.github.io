import React, { useState } from "react";
import "../../main/App.css";
import "./Portfolio.css";
import Gym from "../../assets/gym.png";
import lampPic from "../../assets/code-lamp.png";

const Portfolio = (props) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section id="portfolio">
            <div className="portfolio-area projects-area">
                <div className="projects-overlay">
                    <h3 className="projects-subtitle">PORTFOLIO</h3>
                    <div className="projects-flex">
                        <div className="proj-container"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            >
                            <img className="proj-img" src={Gym} alt="Gym System" />
                                {isHovered && (
                                <a href="https://github.com/maisappreis/registration-system-upfit" target="_blank"
                                    rel="noopener noreferrer" className="hover-box">
                                    <p className="hover-text">An ERP System for a Gym Company</p>
                                </a>
                            )}
                        </div>
                        <div className="proj-container"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            >
                            <img className="proj-img" src={lampPic} alt="Lamp" />
                                {isHovered && (
                                <a href="https://github.com/maisappreis/" target="_blank"
                                    rel="noopener noreferrer" className="hover-box">
                                    <p className="hover-text">An ERP System for a Dental Clinic</p>
                                </a>
                            )}
                        </div>
                        <div className="proj-container"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            >
                            <img className="proj-img" src={lampPic} alt="Lamp" />
                                {isHovered && (
                                <a href="https://github.com/maisappreis/supply-chain" target="_blank"
                                    rel="noopener noreferrer" className="hover-box">
                                    <p className="hover-text">An Supply Chain System</p>
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio;