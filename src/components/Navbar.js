// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';  // For styling

const Navbar = () => {
  return (
    <nav className="Navbar">
      <div className="logo">
        <h1>Your Company</h1> {/* Replace with actual logo */}
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">Contact</Link></li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
