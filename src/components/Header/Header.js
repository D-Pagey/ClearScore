import React from 'react';

import './Header.css';
import logo from '../../imgs/logo.jpg';
import Navbar from '../Navbar';
import Entry from '../Entry';

function Header() {
  return (
    <header className="header">
      <img src={logo} alt='ClearScore logo' className="logo" />
      <Navbar />
      <Entry />
    </header>
  )
}

export default Header;
