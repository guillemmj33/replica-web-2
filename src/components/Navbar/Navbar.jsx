import React from 'react';
import Logo from '../../assets/Images/logo.png';

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg transparent">
      <div class="container-sm">
        <a class="navbar-brand" href="#">
          <img src={Logo} width='40' alt="logo" />
          <span>Soundwave</span>
        </a>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#">Discover</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Join</a>
          </li>
        </ul>
      </div>
    </nav>
  )
};

export default Navbar;