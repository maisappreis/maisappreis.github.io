import React from "react";
import LogoImg from "../../assets/logo-axis.png";
import './Navbar.css';


const Logo = props => 
    <div>
        <img className="logo-img" src={LogoImg} alt="logo" />
    </div>

export default Logo;