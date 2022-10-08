import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Industria from "./pages/Industria";
import Iluminacion from "./pages/Iluminacion";
import Conductores from "./pages/Conductores";
import Terminales from "./pages/Terminales";
import Normalizados from "./pages/Normalizados";
import Instrumentos from "./pages/Instrumentos";
import LineaAerea from "./pages/LineaAerea";
import ConjuntosArmados from "./pages/ConjuntosArmados";
import LucesEmergencia from "./pages/LucesEmergencia";
import Herramientas from "./pages/Herramientas";
import Morceteria from "./pages/Morceteria";

class App extends Component {
  state = {
    logos: [
      { id: 1, name: "logo", img: "/images/logos/logo-ele-centro-three.png" },
    ],
    topicSection: [
      {
        id: 2,
        name: "home with ilumination",
        img: "/images/topic-sections/ilumination/home-with-ilumination.jpg",
      },
    ],
  };
  render() {
    return (
      <BrowserRouter>
          <Navbar logos={this.state.logos} />
          <Routes>
            <Route path="/" element={<Home topicSection={this.state.topicSection} />}/>
            <Route path="/industria" element={<Industria />} />
            <Route path="/iluminacion" element={<Iluminacion />} />
            <Route path="/conductores" element={<Conductores />} />
            <Route path="/terminales" element={<Terminales />} />
            <Route path="/normalizados" element={<Normalizados />} />
            <Route path="/instrumentos-de-medicion"element={<Instrumentos />}/>
            <Route path="/linea-aerea" element={<LineaAerea />} />
            <Route path="/conjuntos-armados" element={<ConjuntosArmados />} />
            <Route path="/luces-emergencia" element={<LucesEmergencia />} />
            <Route path="/herramientas" element={<Herramientas />} />
            <Route path="/morceteria" element={<Morceteria />} />
          </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
