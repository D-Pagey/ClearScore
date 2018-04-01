import React from 'react';

import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <ul className='navbar-list'>
        <li className='navbar-list--items'>About us</li>
        <li className='navbar-list--items'>Blog</li>
        <li className='navbar-list--items'>Learn</li>
        <li className='navbar-list--items'>Careers</li>
        <li className='navbar-list--items'>Help</li>
      </ul>
    </nav>
  )
}

export default Navbar;
