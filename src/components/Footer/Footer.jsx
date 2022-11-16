import React from 'react';

const Footer = () => {
  return (
    <div className="footer">
      <div className="container-sm">
        <ul class="footer-nav">
            <li class="footer-item">
              <a class="footer-link" href="#">About Us</a>
            </li>
            <li class="footer-item">
              <a class="footer-link" href="#">Contact</a>
            </li>
        </ul>

        <ul class="footer-nav">
            <li class="footer-item">
              <a class="footer-link" href="#"><i class="fa-brands fa-twitter"></i>Twitter</a>
            </li>
            <li class="footer-item">
              <a class="footer-link" href="#"><i class="fa-brands fa-square-facebook"></i>Facebook</a>
            </li>
        </ul>
      </div>
    </div>
  )
};

export default Footer;