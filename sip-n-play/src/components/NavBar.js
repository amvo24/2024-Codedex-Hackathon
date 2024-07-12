// src/components/NavBar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import SnP_Logo from '../assets/images/SnP_Logo.png'
import '../CSS/NavBar.css'

const NavBar = () => {
    return (
        <nav className="navbar">
          <div className='logo'>
            <img src={SnP_Logo} alt='logo' />
          </div>
          <ul className="nav-links">
            <li>
              <NavLink exact to="/" activeClassName="active-link" className="nav-link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/events" activeClassName="active-link" className="nav-link">Events</NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeClassName="active-link" className="nav-link">Menu</NavLink>
            </li>
            <li>
              <NavLink to="/games" activeClassName="active-link" className="nav-link">Games</NavLink>
            </li>
            {/* Add more navigation links as needed */}
          </ul>
        </nav>
      );
    };

export default NavBar;
