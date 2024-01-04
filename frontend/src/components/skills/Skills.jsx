import React from 'react';
import "../../main/App.css";
import "./Skills.css";
import ProgressBar from "../progress/ProgressBar";

const Skills = () => {
  
    return (
        <div className="skills-area" id="skills">
            <h3 className="skills-subtitle">SKILLS</h3>
            <div className="row skills-row">
                <div className="skills-item col-lg-6 col-md-6 col-sm-12">
                    <ProgressBar label="HTML5" targetProgress={85} />
                </div>
                <div className="skills-item col-lg-6 col-md-6 col-sm-12">
                    <ProgressBar label="CSS3" targetProgress={80} />
                </div>
                <div className="skills-item col-lg-6 col-md-6 col-sm-12">
                    <ProgressBar label="Vue.js" targetProgress={75} />
                </div>
                <div className="skills-item col-lg-6 col-md-6 col-sm-12">
                    <ProgressBar label="JavaScript" targetProgress={70} />
                </div>
                <div className="skills-item col-lg-6 col-md-6 col-sm-12">
                    <ProgressBar label="Git" targetProgress={70} />
                </div>
                <div className="skills-item col-lg-6 col-md-6 col-sm-12">
                    <ProgressBar label="SQL" targetProgress={65} />
                </div>
                <div className="skills-item col-lg-6 col-md-6 col-sm-12">
                    <ProgressBar label="Python" targetProgress={60} />
                </div>
                <div className="skills-item col-lg-6 col-md-6 col-sm-12">
                    <ProgressBar label="Django" targetProgress={50} />
                </div>
            </div>
        </div>
    );
  };
  
  export default Skills;