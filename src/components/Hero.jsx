
import '../styles/hero.css';
import profileImage from '../assets/profile.jpg';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-container">

        {/* Presentación */}
        <div className="hero-content">

          <span className="hero-eyebrow">
            DESARROLLADOR FULL STACK EN FORMACIÓN
          </span>

          <h1 className="hero-title">
            Hola, soy <span>Matías.</span>
            <br />
            Construyo soluciones digitales.
          </h1>

          <p className="hero-description">
           Estudiante de desarrollo de Software con interés en
           el desarrollo web y backend. Actualmente estoy fortaleciendo
           mis conocimientos en programación, base de datos y arquitectura
           de software mediante el aprendizaje y proyectos personales.
          </p>

          {/* Acciones */}
          <div className="hero-actions">
            <a href="#projects" className="hero-button">
              Ver proyectos
              <ArrowUpRight size={18} />
            </a>

            <a href="#contact" className="hero-link">
              Contactarme
            </a>
          </div>

          <div className="hero-scroll">
            <ArrowDown size={16} />
            <span>Desliza para explorar</span>
          </div>

        </div>

        {/* Fotografía */}
        <div className="hero-image-wrapper">
          <div className="hero-image-decoration"></div>

          <img
            src={profileImage}
            alt="Retrato de Matías"
            className="hero-image"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
