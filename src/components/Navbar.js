import { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    const { logos } = this.props;
    return (
      <nav className="menu">
        <section className="menu__container">
          <Logo logos={logos} />
          <ul className="menu__links">
            <li className="menu__item">
              <Link to="/" className="menu__link">
                INICIO
              </Link>
            </li>

            <li className="menu__item menu__item--show">
              <Link to="/" className="menu__link">
                Categorias
                <i class="bx bx-chevron-down menu__arrow"></i>
              </Link>
              <ul className="menu__nesting">
                <li className="menu__inside">
                  <Link
                    to="/industria"
                    className="menu__link menu__link--inside"
                  >
                    Industria
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/iluminacion"
                    className="menu__link menu__link--inside"
                  >
                    Iluminacion
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/conductores"
                    className="menu__link menu__link--inside"
                  >
                    Conductores
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/terminales"
                    className="menu__link menu__link--inside"
                  >
                    Terminales
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/normalizados"
                    className="menu__link menu__link--inside"
                  >
                    Normalizados
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/instrumentos-de-medicion"
                    className="menu__link menu__link--inside"
                  >
                    Instrumentos de Medicion
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/linea-aerea"
                    className="menu__link menu__link--inside"
                  >
                    Linea Aerea
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/conjuntos-armados"
                    className="menu__link menu__link--inside"
                  >
                    Conjuntos Armados
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/luces-emergencia"
                    className="menu__link menu__link--inside"
                  >
                    Luces de Emergencia
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/herramientas"
                    className="menu__link menu__link--inside"
                  >
                    Herramientas
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/morceteria"
                    className="menu__link menu__link--inside"
                  >
                    Morceteria
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
          <div className="menu__hamburguer">
            <i class="bx bx-menu-alt-right menu__img"></i>
          </div>
        </section>
        <div className="anuncio">
          <Link to="/industria" className="anuncio__link">industria</Link>
          <Link to="/iluminacion" className="anuncio__link">iluminacion</Link>
          <Link to="/conductores" className="anuncio__link">conductores</Link>
          <Link to="/terminales" className="anuncio__link">terminales</Link>
          <Link to="/normalizados" className="anuncio__link">normalizados</Link>
          <Link to="/instrumentos-de-medicion" className="anuncio__link">medicion</Link>
          <Link to="/linea-aerea" className="anuncio__link">aereo</Link>
          <Link to="/conjuntos-armados" className="anuncio__link">armados</Link>
          <Link to="/luces-emergencia" className="anuncio__link">emergencia</Link>
          <Link to="/herramientas" className="anuncio__link">herramientas</Link>
          <Link to="/morceteria" className="anuncio__link">morceteria</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
