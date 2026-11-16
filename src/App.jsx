import { useState } from 'react'
import heroImg from './assets/hero.png'


import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="container section">
          <span className="text-accent">
            FULL STACK DEVELOPER
          </span>

          <h1>MATÍAS.dev</h1>

          <p>
            Building digital solutions through code.
          </p>

          <button className="btn-primary">
            View my projects
          </button>
        </section>
      </main>
    </>
  );
}

export default App;