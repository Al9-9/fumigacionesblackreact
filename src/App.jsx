import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';
import 'aos/dist/aos.css'; 
import AOS from 'aos';      
import Home from './components/Home'; 
import Service from './components/Service'
import About from './components/About';
import Clients from './components/Clients';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 650, 
      once: true,    
    });
  }, []); 

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/servicios' element={<Service/>}/>
          <Route path='/nosotros' element={<About/>}/>
          <Route path='/clientes' element={<Clients/>}/>


        </Routes>
      </Router>

    
    </>
  );
}

export default App;
