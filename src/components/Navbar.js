import { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

import "./Navbar.css";

class Navbar extends Component {
  render() {
    const {logos} = this.props
    return (
      <nav className="menu">
        <section className="menu__container">
           <Logo logos={logos}/>
          <ul className="menu__links">
            <li className="menu__item">
              <Link to="/" className="menu__link">
                Inicio
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

            <li className="menu__item menu__item--show">
              <a href="/" className="menu__link">
                Vededores
                <i class="bx bx-chevron-down menu__arrow"></i>
              </a>

              <ul className="menu__nesting">
                <li className="menu__inside">
                  <a href="/" className="menu__link menu__link--inside">
                    Seller 1
                  </a>
                </li>

                <li className="menu__inside">
                  <a href="/" className="menu__link menu__link--inside">
                    Seller 2
                  </a>
                </li>

                <li className="menu__inside">
                  <a href="/" className="menu__link menu__link--inside">
                    Seller 3
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <div className="menu__hamburguer">
            <i class="bx bx-menu-alt-right menu__img"></i>
          </div>
        </section>
      </nav>
    );
  }
}

export default Navbar;
