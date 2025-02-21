import Footer from "./Footer";
import Header from "./Header";
import Carousel from "./Carousel";
import Cards from './Cards'
import CardImageSection from "./children/CardImageSection";
import FloatingWpButton from "./FloatingWpButton";
import {
  faBriefcase,
  faCertificate,
  faHandshakeSimple,
} from "@fortawesome/free-solid-svg-icons";


import { useState } from "react";

function Home() {
  const [openTextIndex, setOpenTextIndex] = useState(null); // Cambié el estado a uno basado en índices

  const dropDownText = (index) => {
    setOpenTextIndex(index === openTextIndex ? null : index); // Alterna entre abrir y cerrar
  };

  return (
    <>
      <Header />
      <main>
        <Carousel />

        {/* Sección de Párrafo Informativo */}
        <section id="home" className="">
          <p className="">
            Somos una empresa comprometida con la salud y el bienestar de tu
            hogar y negocio. Nuestros servicios están diseñados para ofrecerte
            soluciones efectivas y seguras para el control de plagas. Respaldados por un enfoque riguroso en la seguridad y la excelencia"
          </p>
        </section>
<hr />
        {/* Sección de Iconos */}
        <div className="section-icon">
          <div className="section-icons">
            <CardImageSection
              icon={faHandshakeSimple}
              texto="Compromiso"
              onClick={() => dropDownText(0)} 
              info="Como empresa nos comprometemos a proporcionar servicios de la más alta calidad"
              className={`text-info${openTextIndex === 0 ? ' open' : ''}`} // Aplica la clase open si el índice coincide
            />
            <CardImageSection
              icon={faBriefcase}
              texto="Metodología"
              onClick={() => dropDownText(1)} 
              info="Seguimos un enfoque integral para el control de plagas y
              la fumigación"
              className={`text-info${openTextIndex === 1 ? ' open' : ''}`} // Aplica la clase open si el índice coincide
            />
            <CardImageSection
              icon={faCertificate}
              texto="Certificado"
              onClick={() => dropDownText(2)} 
              info="Fumigaciones Black es una empresa habilitada a nivel provincial bajo el Nro. 2023-947."
              className={`text-info${openTextIndex === 2 ? ' open' : ''}`} // Aplica la clase open si el índice coincide
            />
          </div>
        </div>

<hr />
      <Cards/>  
<hr />
        <FloatingWpButton />
        <Footer />
      </main>
    </>
  );
}

export default Home;
