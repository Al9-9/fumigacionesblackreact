import React from 'react';
import '../styles/footer.css'

function Footer(){
    return (
        <React.Fragment>
<footer className="footer">
  <div className="container">
    <div className="footer-links">
      <a href="https://wa.me/1234567890" target="_blank" className="footer-link">WhatsApp 1</a>
      <a href="https://wa.me/0987654321" target="_blank" className="footer-link">WhatsApp 2</a>
    </div>

    <div className="footer-images">
      <a href="https://www.example.com" target="_blank">
        <img src="https://via.placeholder.com/100x100" alt="Image 1" className="footer-image"/>
      </a>
      <a href="https://www.example.com" target="_blank">
        <img src="https://via.placeholder.com/100x100" alt="Image 2" className="footer-image"/>
      </a>
    </div>

    <div className="footer-credit">
      <p>Sitio web creado por <strong>Aldana Nuñez</strong></p>
    </div>
  </div>
</footer>


        </React.Fragment>
    )
}
export default Footer;