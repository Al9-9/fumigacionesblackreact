import React from 'react';
import '../styles/footer.css'
import instagram from '../assets/image/igicon.avif';
import email from '../assets/image/emailicon.png'
import whatsapp from '../assets/image/WhatsApp.png'
import logo from '../assets/image/blackFumig-transformed.jpeg';


function Footer(){
    return (
        <React.Fragment>
<footer id='contact'className="footer">
  <div className="container">
    <h2 >Contactanos</h2>
    <div className="footer-links">
      <a href="https://wa.me/1536464813" target="_blank" className="footer-link"><img src={whatsapp} alt="" style={{width:'30px', cursor: 'pointer'}}/>+54 1536464813 </a>
      <a href="https://wa.me/1132125341" target="_blank" className="footer-link">+54 1132125341 </a>
    </div>
<div><img style={{width:'100px', borderRadius:'3px'}} src={logo} alt="" /></div>
    <div className="footer-images">
      <a href="https://www.instagram.com/fumigaciones_black/" target="_blank">
        <img src={instagram} alt="Image 1" className="footer-image" style={{width:'30px', cursor: 'pointer', borderRadius:'20px'}}/>
        Instagram
      </a>
      <a href="mailto:fumigacionesblack9@gmail.com" target="_blank">
        <img src={email} alt="Image 2" className="footer-image" style={{width:'30px', cursor: 'pointer', borderRadius:'100%'}}/>
        Email
      </a>
    </div>

    <div className="footer-credit">
      <a href="https://www.linkedin.com/in/aldana-nu%C3%B1ez-4a997a146/" target="_blank"><p>Sitio web creado por <strong style={{cursor:'pointer'}}>Aldana Nuñez</strong></p></a>
    </div>
  </div>
</footer>


        </React.Fragment>
    )
}
export default Footer;