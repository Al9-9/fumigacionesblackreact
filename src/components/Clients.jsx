import Header from './Header';
import Footer from './Footer';
import agira from "../assets/image/agira.png";
import miralagos from "../assets/image/miralagos.png";
import palmares from "../assets/image/Los Palmares.png";
import '../styles/home.css'

function Clients (){
    return(
        <>
        <Header/>
        {/* Sección de Clientes */}
        <section id="clients" className="">
          <h2 className="text-3xl mb-8">Algunos de nuestros clientes </h2>
          <div className="">
            <div className="">
              <div className="">
                <a
                  href="https://www.agira.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={agira} alt="Cliente 1" className="" style={{borderRadius:'0px'}} />
                </a>
              </div>
            </div>
            <div className="">
              <div className="">
                <a
                  href="http://www.clubmiralagos.com.ar"
                  target="_blank"
                  rel=""
                >
                  <img src={miralagos} alt="Cliente 2" className="" />
                </a>
              </div>
            </div>
            <div className="">
              <div className="">
                <a
                  href="https://www.google.com/maps/place/Barrio+Privado+Palmares+de+Pilar/@0,0,15z/data=!4m10!1m2!2m1!1scountry+los+palmares%2B!3m6!1s0x95bc835744947175:0xd0592fae5074cb4a!8m2!3d-34.490579!4d-58.930816!15sChRjb3VudHJ5IGxvcyBwYWxtYXJlc1oWIhRjb3VudHJ5IGxvcyBwYWxtYXJlc5IBDGNvdW50cnlfY2x1YpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VOWWJscFRWemhuUlJBQuABAPoBBAgAECs!16s%2Fg%2F11cjg7nc2r?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={palmares} alt="Cliente 3" className="" />
                </a>
              </div>
            </div>
          </div>
        </section> 
        <hr />
        <section id="influence" className="">
          <h2 className="influence-title">Zonas de influencia</h2>
          <p className="parr-influ">
          Pilar, Tigre, Saavedra, La Plata, Ezeiza, CABA
          </p>
        </section>
        <hr />
        
        <Footer/>
        </>
    )
}

export default Clients;