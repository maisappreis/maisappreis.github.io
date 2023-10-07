import React, { useState } from 'react';
import './Navbar.css';
import "../../main/App.css";


function NavbarWhite() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 800) {
      console.log('dropdown', dropdown)
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className='navbar'>
        <div className='menu-icon' onClick={handleClick}>
          <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>

          <li className='nav-item'>
            <a href="#home" className='nav-links' onClick={closeMobileMenu}>HOME</a>
          </li>

          <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            <a href="#conhecimentos" className='nav-links' onClick={closeMobileMenu}>CONHECIMENTOS</a>
            
          </li>

          <li className='nav-item'>
            <a href="#sobre" className='nav-links'
              onClick={closeMobileMenu}>SOBRE</a>
          </li>

          <li className='nav-item'>
            <a href="#curriculum" className='nav-links' onClick={closeMobileMenu}>CURRICULUM</a>
          </li>

          <li className='nav-item'>
            <a href="#contato" className='nav-links' onClick={closeMobileMenu}>CONTATO</a>
          </li>
          <li>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavbarWhite;