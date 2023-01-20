import React, { useRef } from 'react';

function Navbar({ locate, page }) {
  return (
    <nav
      className={
        locate === 'header'
          ? 'header-nav'
          : locate === 'sidebar'
          ? 'side-nav '
          : null
      }>
      <ul className='navbar '>
        <li>
          <a href='#' className={page === 'home' ? 'active' : null}>
            home
          </a>
        </li>
        <li>
          <a href='#'>about</a>
        </li>
        <li>
          <a href='#'>menu</a>
        </li>
        <li>
          <a href='#' className={page === 'reservation' ? 'active' : null}>
            reservations
          </a>
        </li>
        <li>
          <a href='#'>order online</a>
        </li>
        <li>
          <a href='#'>login</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
