import React from 'react';
import '../styles/footer.css'

function Footer(){
    return (
        <React.Fragment>
<footer class="footer">
  <div class="container">
    <div class="footer-links">
      <a href="https://wa.me/1234567890" target="_blank" class="footer-link">WhatsApp 1</a>
      <a href="https://wa.me/0987654321" target="_blank" class="footer-link">WhatsApp 2</a>
    </div>

    <div class="footer-images">
      <a href="https://www.example.com" target="_blank">
        <img src="https://via.placeholder.com/100x100" alt="Image 1" class="footer-image"/>
      </a>
      <a href="https://www.example.com" target="_blank">
        <img src="https://via.placeholder.com/100x100" alt="Image 2" class="footer-image"/>
      </a>
    </div>

    <div class="footer-credit">
      <p>Sitio web creado por <strong>Aldana Nuñez</strong></p>
    </div>
  </div>
</footer>


        </React.Fragment>
    )
}
export default Footer;