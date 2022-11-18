import React from 'react';
import Logo from '../../assets/Images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg transparent">
      <div class="container-sm">
        <Link to="/" class="navbar-brand">
          <img src={Logo} width='40' alt="logo" />
          <span>Soundwave</span>
        </Link>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#discover">
              Discover
            </a>
          </li>
          <li class="nav-item">
            <Link to="/join" class="nav-link" href="#">
              Join
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;