import Home from "./Screens/Home";
import Services from "./Screens/Services";
import HowWeWork from "./Screens/HowWeWork";
import Benefits from "./Screens/Benefits";
import Contact from "./Screens/Contact";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer"; // Importa el nuevo componente Footer

function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Services />
      <HowWeWork />
      <Benefits />
      <Contact />
      <Footer /> {/* Agrega el Footer aquí */}
    </div>
  );
}

export default App;
