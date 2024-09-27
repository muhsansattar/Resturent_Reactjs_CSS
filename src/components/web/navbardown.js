import React from 'react';
import './navbardown.css';
const NavbarDwon = () => {
  return (
    <div className="container">
      <header className="header">
        <h1>Amplify Development</h1>
        <p>Precision coding for your ideal site.</p>
      </header>
      <div className="services">
        <div className="service">
          <i className="icon">🌐</i>
          <p>Responsive Design</p>
        </div>
        <div className="service">
          <i className="icon">⚙️</i>
          <p>Customization</p>
        </div>
        <div className="service">
          <i className="icon">🚀</i>
          <p>Optimization</p>
        </div>
      </div>
      <div className="cta-buttons">
        <button>Contact Us</button>
        <button>Portfolio</button>
      </div>
      <div className="stats">
        <div className="stat">
          <h2>10+</h2>
          <p>Languages & Frameworks</p>
        </div>
        <div className="stat">
          <h2>20+</h2>
          <p>Projects done</p>
        </div>
        <div className="stat">
          <h2>100,000+</h2>
          <p>Lines of code</p>
        </div>
      </div>
    </div>
  );
};

export default NavbarDwon;
