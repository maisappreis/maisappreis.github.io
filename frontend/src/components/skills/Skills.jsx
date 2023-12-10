import React from 'react';
import "../../main/App.css";
import "./Skills.css";
import ProgressBar from "../progress/ProgressBar";

const Skills = () => {
  
    return (
        <div className="skills-area" id="skills">
            <h3 className="skills-subtitle">SKILLS</h3>
            <div className="skills-row">
                <div className="skills-column">
                    <ProgressBar label="HTML5" targetProgress={85} />
                    <ProgressBar label="CSS3" targetProgress={80} />
                    <ProgressBar label="Vue.js" targetProgress={75} />
                    <ProgressBar label="JavaScript" targetProgress={70} />
                </div>
                <div className="skills-column">
                    <ProgressBar label="SQL" targetProgress={65} />
                    <ProgressBar label="Python" targetProgress={60} />
                    <ProgressBar label="Django" targetProgress={50} />
                </div>
            </div>
        </div>
    );
  };
  
  export default Skills;