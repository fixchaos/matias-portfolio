
import '../styles/about.css';
import {
  GraduationCap,
  Code2,
  Lightbulb,
  Database,
} from 'lucide-react';

function About() {
  return (
    <section id="about" className="about section">
      <div className="about-container">

        {/* Encabezado */}
        <div className="about-header">
          <span className="text-accent">01 / SOBRE MÍ</span>
          <h2 className="about-title">
            Conóceme un poco <span className="text-blue">más.</span>
          </h2>
        </div>

        {/* Contenido principal */}
        <div className="about-content">
          <div className="about-description">

            <p>
              Soy estudiante de Desarrollo de Software y una persona
              curiosa por naturaleza. Me interesa entender cómo
              funcionan las cosas, resolver problemas y transformar
              ideas en soluciones digitales.
            </p>

            <p>
              Actualmente estoy fortaleciendo mis conocimientos en
              desarrollo web, programación backend y bases de datos.
              Me gusta aprender construyendo proyectos propios,
              experimentar con nuevas tecnologías y enfrentar
              desafíos que me permitan mejorar mis habilidades.
            </p>

            <p>
              Mi objetivo es seguir creciendo como desarrollador,
              crear software bien estructurado y participar en
              proyectos donde pueda aportar, aprender y trabajar
              en equipo.
            </p>

            <p className="about-highlight">
              Más que escribir código, me interesa comprender los
              problemas y encontrar buenas soluciones.
            </p>
          </div>

          {/* Tarjetas de información */}
          <div className="about-cards">

            <article className="about-card">
              <GraduationCap className="about-card-icon" />
              <div>
                <h4>Formación</h4>
                <p>
                  Estudiante de Técnico en Programación y Análisis
                  de Sistemas AIEP.
                </p>
              </div>
            </article>

            <article className="about-card">
              <Database className="about-card-icon" />
              <div>
                <h4>Stack Tecnológico</h4>
                <p>
                  Java, Spring Boot, React, JavaScript, PostgreSQL,
                  MySQL y Docker.
                </p>
              </div>
            </article>

            <article className="about-card">
              <Lightbulb className="about-card-icon" />
              <div>
                <h4>Filosofía</h4>
                <p>
                  Experimentar, errar, aprender y resolver.
                </p>
              </div>
            </article>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
