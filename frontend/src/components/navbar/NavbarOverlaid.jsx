import React, { useState } from 'react';
import './Navbar.css';
import "../../main/App.css";


function NavbarOverlaid() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 800) {
  //     console.log('dropdown', dropdown)
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };

  return (
    <>
      <nav className="posit-abs position font-marcellus">
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fa fa-times" : "fa fa-bars"} />
        </div>
        <ul className={click ? "nav-menu just-center active" : "nav-menu just-center"}>
          <li className="nav-item">
            <a href="#home" className="font-white" onClick={closeMobileMenu}>HOME</a>
          </li>
          {/* <li className="nav-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}> */}
          <li className="nav-item">
            <a href="#portfolio" className="font-white" onClick={closeMobileMenu}>GALLERY</a>
          </li>
          <li className="nav-item">
            <a href="#about" className="font-white" onClick={closeMobileMenu}>ABOUT</a>
          </li>
          <li className="nav-item">
            <a href="#curriculum" className="font-white" onClick={closeMobileMenu}>CURRICULUM</a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="font-white" onClick={closeMobileMenu}>CONTACT</a>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavbarOverlaid;