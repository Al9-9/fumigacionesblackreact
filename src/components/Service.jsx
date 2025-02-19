import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import FloatingWpButton from "./FloatingWpButton";
import '../styles/home.css'

function Service() {
  const [selectedService, setSelectedService] = useState(null); // Estado para manejar el servicio seleccionado

  // Función para manejar el clic en un servicio
  const handleServiceClick = (serviceName) => {
    // Establecer el servicio seleccionado
    setSelectedService(serviceName === selectedService ? null : serviceName); // Si el servicio ya está seleccionado, lo deselecciona
  };

  return (
    <>
      <Header />
      <hr />
      <section id="service">
        <h2>Nuestros Servicios</h2>
        <p>
          En nuestra fumigadora nos dedicamos a ofrecer soluciones integrales de
          control de plagas, utilizando productos amigables con el medio
          ambiente y procedimientos altamente efectivos. Nuestro compromiso es
          ofrecerte un ambiente seguro y libre de plagas.
        </p>

        <ul>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleServiceClick("industria")}
          >
            Fumigación industria | control
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleServiceClick("comercial")}
          >
            Fumigación | control comercial
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleServiceClick("jardines")}
          >
            Fumigación de jardines y áreas verdes
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleServiceClick("emergencia")}
          >
            Fumigación de emergencia
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => handleServiceClick("residencial")}
          >
            Fumigación | control residencial
          </li>
        </ul>

        {/* Mostrar el texto asociado al servicio seleccionado */}
        {selectedService === "industria" && (
          <p className="sec-work">
            Soluciones para almacenes, plantas de producción y otras
            instalaciones industriales. Control de plagas especializado para
            cumplir estándares regulatorios.
          </p>
        )}
        {selectedService === "comercial" && (
          <p className="sec-work">
            Tratamientos personalizados para negocios, restaurantes, hoteles y
            más. Inspecciones regulares y planes de mantenimiento.
          </p>
        )}
        {selectedService === "jardines" && (
          <p className="sec-work">
            Protección de áreas verdes contra plagas y virus. Servicio de
            fumigación ecológicamente seguros para preservar la biodiversidad.
          </p>
        )}
        {selectedService === "emergencia" && (
          <p className="sec-work">
            Respuesta rápida a situaciones de infestación severa. Servicio de
            fumigación urgente para resolver problemas críticos.
          </p>
        )}
        {selectedService === "residencial" && (
          <p className="sec-work">
            • Control de insectos (cucarachas, hormigas, arañas, etc.) •
            Eliminación de roedores (ratones/ratas) • Fumigación preventiva para
            mantener su hogar libre de plagas. • Fumigación de interior y
            exterior
          </p>
        )}
      </section>
      <hr />
      <FloatingWpButton />
      <Footer />
    </>
  );
}

export default Service;
