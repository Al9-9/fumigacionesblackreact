import React from 'react';
import '../styles/header.css'; // Asegúrate de que la ruta sea correcta

function Header() {
  return (
    <header className="header">
      <div className="container">
        {/* Logo o título principal */}
        <div className="logo">
          <img
            src="src/assets/image/blackFumig-transformed.png"
            alt="Logo"
            className="logo-img"
          />
        </div>

        {/* Navegación */}
        <nav className="navigation">
          <a href="#home" className="nav-link">Inicio</a>
          <a href="#about" className="nav-link">Nosotros</a>
          <a href="#services" className="nav-link">Servicios</a>
          <a href="#clients" className="nav-link">Clientes</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
