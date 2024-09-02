import React from 'react';
import './style.css';


function WelcomeComponent() {
  return (
    <div className="welcome-container">
      <img
        src="https://omeg.sdmujer.gov.co/images/logo_alcaldia.png"
        alt="Bogotá"
        className="welcome-image"
      />
      <div className="welcome-text">
        Bienvenido a la prueba técnica, ¡muchos éxitos!
      </div>
      <button className="view-test-button">Empezar Test</button>
    </div>
  );
}

export default WelcomeComponent;