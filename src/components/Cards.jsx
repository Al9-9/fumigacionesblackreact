import React from 'react';
import cap1 from '../assets/image/cap1.jpeg'
import cap2 from '../assets/image/cap2.jpg'
import cap3 from '../assets/image/cap3.jpg'
import cap4 from '../assets/image/cap4.jpg'
import cap5 from '../assets/image/cap5.png'
import cap6 from '../assets/image/cap6.png'
import '../styles/home.css'

function Cards(){
    return (<><h2>Black en acción</h2>
       <section className="card-section">
        
      <div className="card">
        <img src={cap1} alt="Imagen 1" />
      </div>
      <div className="card">
        <img src={cap2} alt="Imagen 2" />
      </div>
      <div className="card">
        <img src={cap3} alt="Imagen 3" />
      </div>
      <div className="card">
        <img src={cap4} alt="Imagen 3" />
      </div>
      <div className="card">
        <img src={cap5} alt="Imagen 3" />
      </div>
      <div className="card">
        <img src={cap6} alt="Imagen 3" />
      </div>
    </section>
    </>)
}

export default Cards