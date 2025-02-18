import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';
import 'aos/dist/aos.css';  // Importar los estilos de AOS
import AOS from 'aos';       // Importar la librería de AOS
import Home from './components/Home'; // Tu componente Home

function App() {
  useEffect(() => {
    // Inicializar AOS cuando el componente se haya montado
    AOS.init({
      duration: 650, // Duración de la animación
      once: true,    // La animación solo se ejecutará una vez
    });
  }, []); // El array vacío asegura que se ejecute solo una vez cuando el componente se monte

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>

      {/* Aquí puedes agregar algunos elementos con animación */}
      <div data-aos="fade-up">
        <h2>Bienvenido a mi página</h2>
      </div>
      <div data-aos="zoom-in">
        <p>Este contenido tiene una animación al entrar en la pantalla.</p>
      </div>
    </>
  );
}

export default App;
