import React, { useState } from "react";
import "./Navbar.css";
import "../../main/App.css";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";


function NavbarWhite() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className="posit-fixed position bg-white font-black font-sans">
        <div className="menu-icon" onClick={handleClick}>
          <FontAwesomeIcon className="icon" icon={click ? faXmark : faBars} />
        </div>
        <div className="flex-box around">
          <Logo />
          <ul className={click ? "nav-menu just-end active" : "nav-menu just-end"}>
            <li className="nav-item">
              <a href="#home" className="menu-item" onClick={closeMobileMenu}>HOME</a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="menu-item" onClick={closeMobileMenu}>PORTFOLIO</a>
            </li>
            <li className="nav-item">
              <a href="#skills" className="menu-item" onClick={closeMobileMenu}>SKILLS</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="menu-item" onClick={closeMobileMenu}>ABOUT</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="menu-item" onClick={closeMobileMenu}>CONTACT</a>
            </li>
            <li>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarWhite;