import React from "react";
import logo from "../img/Free_Sample_By_Wix.png";
import cerrarSesion from "../img/salir.jpeg";

export function Header({ title }) {
  return (
    <React.Fragment>
      <header id="header">
        <a href="/principal">
          <img id="logo" alt="Home-figure" src={logo} />
        </a>
        <a href="/principal">
          <h1>{title}</h1>
        </a>

        <ul>
          <li>
            <a href="/profile">Hola chaval</a>
          </li>
          <li className="logout"><img src={cerrarSesion} alt="salir" /></li>
        </ul>
      </header>
    </React.Fragment>
  );
}
