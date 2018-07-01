import React from "react";
import "./Nav.css";

const Nav = () => (

  <nav className="nav nav-pills nav-fill">

    <li className="nav-item">
      <a className='nav-link' href='/'>Clicky Game</a>
    </li>

    <li className="nav-item navbar-text">
      Click an image to begin!
    </li>

    <li className="nav-item navbar-text">
      Score: 0  |  Top Score： 0
    </li>

  </nav>
);

export default Nav;
