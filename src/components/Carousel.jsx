import React from 'react';

import cap8 from '../assets/image/cap8.jpeg';
import cap2 from '../assets/image/cap2.jpg';
import cap3 from '../assets/image/cap3.jpg';

function Carousel() {
  return (
    <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img 
            src={cap8} 
            className="d-block w-50 img-fluid" 
            alt="..."
          />
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img 
            src={cap2} 
            className="d-block w-100 img-fluid" 
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img 
            src={cap3} 
            className="d-block w-100 img-fluid" 
            alt="..."
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;
