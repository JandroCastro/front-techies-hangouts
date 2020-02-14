import React from "react";
import logo from "../img/Free_Sample_By_Wix.png";

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

        <div>
          <a href="/profile">Hola chaval</a>
        </div>
      </header>
    </React.Fragment>
  );
}
