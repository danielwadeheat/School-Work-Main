import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/ex1-catalog-browser">Catalog Browser</Link>
        </li>
        <li>
          <Link to="/ex2-useFetchJSON">Use Fetch JSON</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;