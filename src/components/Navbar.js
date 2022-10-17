import { logos } from "../exports/data";
import { Link } from "react-router-dom";
import "./Navbar.css";

import React from 'react'

const Navbar = () => {
  return (
    <nav className="menu"> 
        <section className="menu__container">
          <Link to="/electricidad-centro">
            <img src={logos[0].img} alt={logos[0].alt}></img>
          </Link>
          <ul className="menu__links">
            <li className="menu__item menu__item--show">
              <Link to="/electricidad-centro" className="menu__link">
                Categorias
                <i class="bx bx-chevron-down menu__arrow"></i>
              </Link>
              <ul className="menu__nesting">
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/industria"
                    className="menu__link menu__link--inside"
                  >
                    Industria
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/iluminacion"
                    className="menu__link menu__link--inside"
                  >
                    Iluminacion
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/conductores"
                    className="menu__link menu__link--inside"
                  >
                    Conductores
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/terminales"
                    className="menu__link menu__link--inside"
                  >
                    Terminales
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/normalizados"
                    className="menu__link menu__link--inside"
                  >
                    Normalizados
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/instrumentos-de-medicion"
                    className="menu__link menu__link--inside"
                  >
                    Instrumentos de Medicion
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/linea-aerea"
                    className="menu__link menu__link--inside"
                  >
                    Linea Aerea
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/conjuntos-armados"
                    className="menu__link menu__link--inside"
                  >
                    Conjuntos Armados
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/luces-emergencia"
                    className="menu__link menu__link--inside"
                  >
                    Luces de Emergencia
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/herramientas"
                    className="menu__link menu__link--inside"
                  >
                    Herramientas
                  </Link>
                </li>
                <li className="menu__inside">
                  <Link
                    to="/electricidad-centro/morceteria"
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
          <Link to="/electricidad-centro/industria" className="anuncio__link">
            industria
          </Link>
          <Link to="/electricidad-centro/iluminacion" className="anuncio__link">
            iluminacion
          </Link>
          <Link to="/electricidad-centro/conductores" className="anuncio__link">
            conductores
          </Link>
          <Link to="/electricidad-centro/terminales" className="anuncio__link">
            terminales
          </Link>
          <Link to="/electricidad-centro/normalizados" className="anuncio__link">
            normalizados
          </Link>
          <Link to="/electricidad-centro/instrumentos-de-medicion" className="anuncio__link">
            medicion
          </Link>
          <Link to="/electricidad-centro/linea-aerea" className="anuncio__link">
            aereo
          </Link>
          <Link to="/electricidad-centro/conjuntos-armados" className="anuncio__link">
            armados
          </Link>
          <Link to="/electricidad-centro/luces-emergencia" className="anuncio__link">
            emergencia
          </Link>
          <Link to="/electricidad-centro/herramientas" className="anuncio__link">
            herramientas
          </Link>
          <Link to="/electricidad-centro/morceteria" className="anuncio__link">
            morceteria
          </Link>
        </div>
      </nav>
  )
}

export default Navbar
