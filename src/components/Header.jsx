import React, { useState } from 'react';
import '../styles/header.css'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para el menú desplegable

  // Función para alternar el menú
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Logo o título principal */}
         {/* Navegación */}
         <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <a href="#home" className="nav-link">Inicio</a>
          <a href="#about" className="nav-link">Nosotros</a>
          <a href="#services" className="nav-link">Servicios</a>
          <a href="#clients" className="nav-link">Clientes</a>
          <a href="#contact" className="nav-link">Contacto</a>
        </nav>
        <div className="logo">
          <img
            src="src/assets/image/blackFumig-transformed.png"
            alt="Logo"
            className="logo-img"
          />
          
           {/* Icono de hamburguesa para pantallas móviles */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        </div>

       

       
      </div>
    </header>
  );
}

export default Header;
