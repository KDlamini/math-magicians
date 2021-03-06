import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav>
      <Header />
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/calculator" className="link">Calculator</Link>
        </li>
        <li className="nav-item">
          <Link to="/quote" className="link">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
