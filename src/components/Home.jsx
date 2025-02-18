import Footer from './Footer'
import Header from './Header'
import Carousel from './Carousel'
import CardImageSection from './children/CardImageSection'
import FloatingWpButton from './FloatingWpButton'
import { faBriefcase, faCertificate, faHandshakeSimple } from '@fortawesome/free-solid-svg-icons'
import agira from '../assets/image/agira.png'
import miralagos from '../assets/image/miralagos.png'
import palmares from '../assets/image/Los Palmares.png'
import cap6 from '../assets/image/cap6.png'
import cap7 from '../assets/image/cap7.png'

function Home() {
    return (
        <>
            <Header />
            <main>
                <Carousel />

                {/* Sección de Párrafo Informativo */}
                <section id="home" className="">
                    <p className="">
                        Somos una fumigadora comprometida con la salud y el bienestar de tu hogar y negocio. Nuestros servicios están diseñados para ofrecerte soluciones efectivas y seguras para el control de plagas.
                    </p>
                </section>
     {/* Sección de Iconos */}
     <div className="section-icon">
                    <div className="section-icons">
                        <CardImageSection
                            icon={faHandshakeSimple}
                            texto='Compromiso'
                        />
                        <CardImageSection
                            icon={faBriefcase}
                            texto='Metodología'
                        />
                        <CardImageSection
                            icon={faCertificate}
                            texto='Certificado'
                        />
                    </div>
                </div>
                {/* Sección de Imágenes y Texto */}
                <section id="services" className="">
                    <div className="service">
                        <img src={cap6} alt="Fumigadora en acción" className=""  />
                        <p className="">Realizamos fumigaciones con productos ecológicos y de última tecnología...</p>
                    </div>
                    <div className="service">
                        <img src={cap7} alt="Equipo de trabajo" className=""  />
                        <p className="">Contamos con un equipo altamente capacitado que trabaja con los mejores equipos...</p>
                    </div>
                </section>

                {/* Sección de Clientes */}
                <section id="clients" className="">
                    <h2 className="text-3xl mb-8">Algunos de nuestros clientes </h2>
                    <div className="">
                        <div className="">
                            <div className="">
                                <a href="https://www.agira.com.ar" target="_blank" rel="noopener noreferrer">
                                    <img src={agira} alt="Cliente 1" className=""  />
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <a href="http://www.clubmiralagos.com.ar" target="_blank" rel="">
                                    <img src={miralagos} alt="Cliente 2" className="" />
                                </a>
                            </div>
                        </div>
                        <div className="">
                            <div className="">
                                <a href="https://www.google.com/maps/place/Barrio+Privado+Palmares+de+Pilar/@0,0,15z/data=!4m10!1m2!2m1!1scountry+los+palmares%2B!3m6!1s0x95bc835744947175:0xd0592fae5074cb4a!8m2!3d-34.490579!4d-58.930816!15sChRjb3VudHJ5IGxvcyBwYWxtYXJlc1oWIhRjb3VudHJ5IGxvcyBwYWxtYXJlc5IBDGNvdW50cnlfY2x1YpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOWWJscFRWemhuUlJBQuABAPoBBAgAECs!16s%2Fg%2F11cjg7nc2r?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">
                                    <img src={palmares} alt="Cliente 3" className=""  />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>


                {/* Formulario de Contacto */}
                <section id="contact" className="">
                    <h2 className="">Contacto</h2>
                    <form className="">
                        <input type="text" placeholder="Nombre" className="" />
                        <input type="email" placeholder="Correo Electrónico" className="" />
                        <textarea placeholder="Mensaje" className=""></textarea>
                        <button type="submit" className="">Enviar</button>
                    </form>
                </section>

                {/* About - Información de la Empresa */}
                <section id="about" className="">
                    <h2 className="">Acerca de Nosotros</h2>
                    <p className="">
                        En nuestra fumigadora nos dedicamos a ofrecer soluciones integrales de control de plagas, utilizando productos amigables con el medio ambiente y procedimientos altamente efectivos. Nuestro compromiso es ofrecerte un ambiente seguro y libre de plagas.
                    </p>
                </section>

           

                <FloatingWpButton />
                <Footer />
            </main>
        </>
    )
}

export default Home
