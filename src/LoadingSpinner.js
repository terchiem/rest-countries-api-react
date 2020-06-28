import React from 'react';
import './LoadingSpinner.css';

/**
 * Displayed while fetching data from API
 */

function LoadingSpinner() {
  return (
    <div className="LoadingSpinner">
      <div className="LoadingSpinner-spinner"></div>
    </div>
  )
}

export default LoadingSpinner;