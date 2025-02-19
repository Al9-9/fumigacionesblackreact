import React, { useState } from 'react' ;
import { Link } from 'react-router-dom';
import '../styles/header.css'; // Asegúrate de que la ruta sea correcta
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/image/blackFumig-transformed.png'
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
      
        <div className="logo">
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="logo-img"
          /></Link> 
          
           {/* Icono de hamburguesa para pantallas móviles */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} />
        </div>
        </div>
   {/* Navegación */}
         <nav className={`navigation ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-link">Inicio</Link>
          <Link to="/nosotros" className="nav-link">Nosotros</Link>
          <Link to="/servicios" className="nav-link">Servicios</Link>
          <Link to="/clientes" className="nav-link">Clientes</Link>
          <a href="#contact" className="nav-link">Contacto</a>
        </nav>
       

       
      </div>
    </header>
  );
}

export default Header;
