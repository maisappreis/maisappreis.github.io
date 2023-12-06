import React from "react";
import "../../main/App.css";
import "./Contacts.css";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";


const Contacts = props =>
    <div className="contacts-area container-fluid" id="contact">
        <h3 className="contact-subtitle">CONTACT</h3>
        <div className="contacts-flex">
            <div className="contact-item col-xs-12 col-md-6">
                <img src={email} alt="Email" />
                <span className="text-item">maisapierinipreis@gmail.com</span>
            </div>
            <div className="contact-item col-xs-12 col-md-6">
                <img src={phone} alt="Phone" />
                <span className="text-item">+55 48 9 9603-0183</span>
            </div>
        </div>
        <div className="contacts-flex">
            <div className="contact-item col-xs-12 col-md-6">
                <img src={linkedin} alt="Linkedin" />
                <span className="text-item">linkedin.com/in/maisa-pp-2303/</span>
            </div>
            <div className="contact-item col-xs-12 col-md-6">
                <img src={github} alt="Github" />
                <span className="text-item">github.com/maisappreis</span>
            </div>
        </div>
    </div>

export default Contacts;