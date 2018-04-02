import React from 'react';

import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list--items'>
          <a href='#' className='navbar-links'>About us</a></li>
        <li className='navbar-list--items'
          ><a href='#' className='navbar-links'>Blog</a></li>
        <li className='navbar-list--items'
          ><a href='#' className='navbar-links'>Learn</a></li>
        <li className='navbar-list--items'>
          <a href='#' className='navbar-links'>Careers</a></li>
        <li className='navbar-list--items'>
          <a href='#' className='navbar-links'>Help</a></li>
      </ul>
    </nav>
  )
}

export default Navbar;
