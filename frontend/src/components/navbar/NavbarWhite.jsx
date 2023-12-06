import React, { useState } from 'react';
import './Navbar.css';
import "../../main/App.css";
import Logo from "./Logo";


function NavbarWhite() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return (
    <>
      <nav className='posit-fixed position bg-white font-black font-sans'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <div className='flex-box around'>
          <Logo />
          <ul className={click ? 'nav-menu just-end active' : 'nav-menu just-end'}>
            <li className='nav-item'>
              <a href="#home" className='font-black' onClick={closeMobileMenu}>HOME</a>
            </li>
            <li className='nav-item'>
              <a href="#portfolio" className='font-black' onClick={closeMobileMenu}>PORTFOLIO</a>
            </li>
            <li className='nav-item'>
              <a href="#skills" className='font-black' onClick={closeMobileMenu}>SKILLS</a>
            </li>
            <li className='nav-item'>
              <a href="#about" className='font-black' onClick={closeMobileMenu}>ABOUT</a>
            </li>
            <li className='nav-item'>
              <a href="#contact" className='font-black' onClick={closeMobileMenu}>CONTACT</a>
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