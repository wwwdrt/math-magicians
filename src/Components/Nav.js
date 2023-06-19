import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <nav id="navbar">
    <h1>Math Magicians</h1>
    <ul id="menu">
      <li><Link to="/">Home</Link></li>
      <li>|</li>
      <li><Link to="/calculator">Calculator</Link></li>
      <li>|</li>
      <li><Link to="/quotes">Quotes</Link></li>
      <li>|</li>
      <li><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default Nav;
