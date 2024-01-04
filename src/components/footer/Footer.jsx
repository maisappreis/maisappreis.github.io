import React from "react";
import "./Footer.css";
import "../../main/App.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'


const Footer = props =>
    <footer className="footer-area">
        <span>
            Developed with <FontAwesomeIcon icon={faHeart} className="heard" /> by <i id="maisa" className="heard">Maisa</i>.           
        </span>
    </footer>


export default Footer;