import React from "react";
import "../../main/App.css";
import "./Contacts.css";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";


const Contacts = props =>
    <div className="contacts-area" id="contact">
        <h3 className="contact-subtitle">CONTACT</h3>
        <div className="row contacts-flex">
            <div className="contact-item col-lg-6 col-md-12">
                <img src={email} alt="Email" />
                <a href="mailto:maisapierinipreis@gmail.com" target="_blank" rel="noopener noreferrer" className="text-item">
                    maisapierinipreis@gmail.com
                </a>
            </div>
            <div className="contact-item col-lg-6 col-md-12">
                <img src={phone} alt="Phone" />
                <a href="https://api.whatsapp.com/send?phone=5548996030183&text=Hello,%20Maisa%20How%20are%20you?%20I%20just%20checked%20your%20portfolio%20on%20your%20github%20website%20and%20I%20have%20a%20job%20opportunity%20for%20you." target="_blank" rel="noopener noreferrer" className="text-item">
                    +55 48 9 9603-0183
                </a>
            </div>
            <div className="contact-item col-lg-6 col-md-12">
                <img src={linkedin} alt="Linkedin" />
                <a href="https://linkedin.com/in/maisa-pp-2303/" target="_blank" rel="noopener noreferrer" className="text-item">
                    linkedin.com/in/maisa-pp-2303/
                </a>
            </div>
            <div className="contact-item col-lg-6 col-md-12">
                <img src={github} alt="Github" />
                <a href="https://github.com/maisappreis" target="_blank" rel="noopener noreferrer" className="text-item">
                    github.com/maisappreis
                </a>
            </div>
        </div>
    </div>


export default Contacts;