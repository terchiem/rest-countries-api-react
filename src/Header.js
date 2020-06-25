import React from 'react';

/**
 * Header seen on every page. Displays app title and a theme toggler.
 */

function Header() {
  return (
    <div className="Header">
      <div className="Header-title">
        Where in the world?
      </div>
      <div className="Header-theme-toggle">
        ☾ Dark Mode <i class="far fa-moon"></i>
      </div>
    </div>
  )
}

export default Header;