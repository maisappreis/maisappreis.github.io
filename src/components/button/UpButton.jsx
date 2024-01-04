import React from "react";
import "./Button.css";
import backButton from "../../assets/back-btn.png";

const UpButton = props =>
    <button className="up-button">
        <a href="#home">
            <img src={backButton} alt="Back button" />
        </a>
    </button>

export default UpButton;