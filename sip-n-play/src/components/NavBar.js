// src/components/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import SnP_Logo from '../assets/images/SnP_Logo.png'

const NavBar = () => {
  return (
    <nav>
      <div className='logo'>
        <img src={SnP_Logo} alt='logo'></img>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/events">Events</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
};

export default NavBar;
