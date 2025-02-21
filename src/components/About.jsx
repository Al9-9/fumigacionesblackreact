import Header from "./Header";
import Footer from "./Footer";
import cap8 from '../assets/image/cap8.jpeg'
import cap9 from '../assets/image/cap9.jpeg'
import { width } from "@fortawesome/free-solid-svg-icons/fa0";
import '../styles/home.css'
function About() {
  return (
    <>
      <Header />
      <hr />
      <section id="about" className="">
        <h2 className="">Acerca de Nosotros</h2>
        <p className="">
          En nuestra empresa nos dedicamos a ofrecer soluciones integrales de
          control de plagas, utilizando productos amigables con el medio
          ambiente y procedimientos altamente efectivos. Nuestro compromiso es
          ofrecerte un ambiente seguro y libre de plagas.
        </p>
      <img style={{width:'100%', borderRadius:'5px'}} src={cap8} alt="" />
      <hr />
      <hr />
      <ol>
        <li>
          Nos comprometemos a: Utilizar únicamente productos aprobados por los
          organismos reguladores y que cumplen con los más altos estándares de
          calidad y seguridad.{" "}
        </li>
        <li>
          Emplear técnicas de aplicación eficientes y precisas para minimizar
          cualquier riesgo para la salud humana y el medio ambiente.{" "}
        </li>
        <li>
          Capacitar continuamente a nuestro equipo en las últimas prácticas y
          tecnologías en el control de plagas, garantizando un servicio
          profesional y confiable en todo momento.{" "}
        </li>
        <li>
          {" "}
          Personalizar cada solución de fumigación según las necesidades
          específicas de nuestros clientes.
        </li>
      </ol>
      <img style={{width:'100%'}} src={cap9} alt="" />
</section>
<hr />
      <Footer />
    </>
  );
}

export default About;
