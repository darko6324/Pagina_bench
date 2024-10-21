import React from 'react';
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"; // Importa el nuevo componente Footer
import Home from "./Screens/Home";
import Services from "./Screens/Services";
import HowWeWork from "./Screens/HowWeWork";
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import './App.css';


function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home">
        <Home /> {/* Contenido de la sección Home */}
      </section>
      <section id="services">
        <Services /> {/* Contenido de la sección Services */}
      </section>
      <section id="howwework">
        <HowWeWork /> {/* Contenido de la sección How We Work */}
      </section>
      <section id="benefits">
        <Benefits /> {/* Contenido de la sección Benefits */}
      </section>
      <section id="contact">
        <Contact /> {/* Contenido de la sección Contact */}
      </section>
      <Footer /> {/* Footer al final */}
    </div>
  );
}

export default App;
