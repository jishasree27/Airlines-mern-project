import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Take Me Trip</h1>
      <nav className="navbar">
      <Link to="/signup">Sign Up</Link>
      <Link to="/about">About</Link>
        
      </nav>
    </header>
  );
}

export default Header;
