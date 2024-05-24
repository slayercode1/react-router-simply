import React from 'react';
import './styles.modules.css'

const NotFound: React.FC = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <h2 className="not-found-subtitle">Page Not Found</h2>
      <p className="not-found-text">Sorry, the page you are looking for does not exist.</p>
      <button 
        onClick={goBack} 
        className="not-found-button"
      >
        Go Back
      </button>
    </div>
  );
};

export default NotFound;
