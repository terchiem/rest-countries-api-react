import React from 'react';
import './Header.css';

/**
 * Header seen on every page. Displays app title and a theme toggler.
 */

function Header({ theme, setTheme }) {

  /** Toggles between dark and light theme */
  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  const togglerText = theme === 'light' ?
    <><i className="fa fa-moon-o" aria-hidden="true"></i> Dark Mode</> :
    <><i className="fa fa-sun-o" aria-hidden="true"></i> Light Mode</>;

  return (
    <div className="Header">
      <div className="Header-content">
        <h2>Where in the world?</h2>
        <div
          className="Header-theme-toggle"
          onClick={toggleTheme}
        >
          {togglerText}
        </div>
      </div>
    </div>
  )
}

export default Header;