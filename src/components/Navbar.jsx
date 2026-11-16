
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import '../styles/navbar.css';

function Navbar() {

  // Estado para controlar el menú móvil
  const [menuOpen, setMenuOpen] = useState(false);

  // Elementos de navegación
  const navLinks = [
    { label: 'Inicio', href: '#home' },
    { label: 'Sobre mí', href: '#about' },
    { label: 'Proyectos', href: '#projects' },
    { label: 'Contacto', href: '#contact' }
  ];

  // Cerrar menú después de seleccionar una sección
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          MATÍAS<span>.dev</span>
        </a>

        {/* Navegación */}
        <nav
          id="mobile-navigation"
          className={`navbar-nav ${menuOpen ? 'active' : ''}`}
          aria-label="Navegación principal"
        >

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="navbar-link"
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}

        </nav>

        {/* Botón menú móvil */}
        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </div>

    </header>
  );
}

export default Navbar;
