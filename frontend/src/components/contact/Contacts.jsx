import React from "react";
import "../../main/App.css";
import "./Contacts.css";
import email from "../../assets/email.jpg";
import whatsapp from "../../assets/whatsapp.jpg";

// ADICIONAR:

// Criciúma, SC - Brazil
// linkedin.com/in/maisa-pp-2303/
// github.com/maisappreis

const Contacts = props =>
    <div className="contacts-area container-fluid" id="contact">
        <h3 className="contact-subtitle">CONTACT</h3>
        <div className="contacts-flex row">
            <div className="email col-xs-12 col-md-6">
             <img src={email} alt="Email" />
             <span id="gmail">maisapierinipreis@gmail.com</span>
            </div>
            <div className="whatsapp col-xs-12 col-md-6">
                <img src={whatsapp} alt="WhatsApp" />
                <span id="phone">+55 48 9 9603-0183</span>
            </div>
        </div>
    </div>

export default Contacts;