import React from 'react';

const Header = () => {
  return (
    <header className="header-section">
      <div className="container">
        <h1 className="main-title">Bhavesh Sanjiv Kapur</h1>
        <p className="subtitle">
          Computer Science student with a strong background in DevOps and cloud technologies.
        </p>
        
        <div className="social-links">
          <a href="https://github.com/Bhavesh-Kapur" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/bhavesh-sanjiv-kapur-951826287/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="mailto:ddnbhavesh@gmail.com">
            Email
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
