import React from 'react';
import './Header.css';

/**
 * Header seen on every page. Displays app title and a theme toggler.
 */

function Header() {
  return (
    <div className="Header">
      <div className="Header-content">
        <h2>Where in the world?</h2>
        <div className="Header-theme-toggle">
          ☾ Dark Mode <i class="far fa-moon"></i>
        </div>
      </div>
    </div>
  )
}

export default Header;