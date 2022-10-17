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

import {logos, topic, iluminacionT, normalizadosT, instrumentosT, aereoT, emergenciaT, armadosT, armadosSica, armadosJeluz, armadosXx1, armadosXxii, armadosBauhaus, herramientasT, morceteriaT} from './exports/data'

class App extends Component {

  state = {
    logos: [
      { id: 1, name: "logo", img: "/images/logos/logo-ele-centro-three.png" },
    ],
  };
  render() {
    return (
      <BrowserRouter>
          <Navbar logos={this.state.logos} toppic={topic} logo={logos}/>
          <Routes>
            <Route path="/electricidad-centro" element={<Home topicSection={this.state.topicSection} toppic={topic}/>}/>
            <Route path="/electricidad-centro/industria" element={<Industria topic={topic}/>} />
            <Route path="/electricidad-centro/iluminacion" element={<Iluminacion iluminacionT={iluminacionT}/>} />
            <Route path="/electricidad-centro/conductores" element={<Conductores topic={topic}/>} />
            <Route path="/electricidad-centro/terminales" element={<Terminales topic={topic}/>} />
            <Route path="/electricidad-centro/normalizados" element={<Normalizados topic={topic} normalizadosT={normalizadosT}/>} />
            <Route path="/electricidad-centro/instrumentos-de-medicion"element={<Instrumentos topic={topic} instrumentosT={instrumentosT}/>}/>
            <Route path="/electricidad-centro/linea-aerea" element={<LineaAerea topic={topic} aereoT={aereoT}/>} />
            <Route path="/electricidad-centro/conjuntos-armados" element={<ConjuntosArmados topic={topic} armadosT={armadosT} armadosSica={armadosSica} armadosJeluz={armadosJeluz} armadosXx1={armadosXx1} armadosXxii={armadosXxii} armadosBauhaus={armadosBauhaus}/>} />
            <Route path="/electricidad-centro/luces-emergencia" element={<LucesEmergencia topic={topic} emergenciaT={emergenciaT}/>} />
            <Route path="/electricidad-centro/herramientas" element={<Herramientas topic={topic} herramientasT={herramientasT}/>} />
            <Route path="/electricidad-centro/morceteria" element={<Morceteria topic={topic} morceteriaT={morceteriaT}/>} />
          </Routes>
      </BrowserRouter>
    );
  }
}
export default App;
