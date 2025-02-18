import React from 'react';

import banner from '../assets/image/banner.jpg';


function Carousel() {
  return (
      <div className="carousel">
          <img 
            src={banner} 
            className="banner" 
            alt="..."
          />
        </div>
  );
}

export default Carousel;
