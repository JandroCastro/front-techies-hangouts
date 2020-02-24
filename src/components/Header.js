import React from "react";
import logo from "../img/logo.jpeg";
import cerrarSesion from "../img/cerrar-sesion.svg";

export function Header({ title }) {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));

  let href = "";
  if (storedUser === null) {
    href = "/principal";
  } else {
    href = `/profile/{${storedUser.userId})`;
  }

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
          <li className="hola">
            <a href={href}>Hola chaval</a>
          </li>

          <li className="logout">
            <img
              onClick={() => {
                localStorage.removeItem("currentUser");
                window.location.href = "/";
              }}
              src={cerrarSesion}
              alt="salir"
            />
          </li>
        </ul>
      </header>
    </React.Fragment>
  );
}
