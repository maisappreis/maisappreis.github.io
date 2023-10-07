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
              <a href="#home" className='font-black' onClick={closeMobileMenu}>INÍCIO</a>
            </li>
            <li className='nav-item'>
              <a href="#conhecimentos" className='font-black' onClick={closeMobileMenu}>PORTIFÓLIO</a>
            </li>
            <li className='nav-item'>
              <a href="#sobre" className='font-black' onClick={closeMobileMenu}>SOBRE</a>
            </li>
            <li className='nav-item'>
              <a href="#contato" className='font-black' onClick={closeMobileMenu}>CONTATO</a>
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