import React from "react";

export function Header({ title }) {
  return (
    <React.Fragment>
      <header>
        <a href="/home">
          <img
            alt="Home-figure"
            src="https://image.flaticon.com/icons/svg/25/25694.svg"
          />
        </a>
        <a href="/home">
          <h1>{title}</h1>
        </a>

        <div>
          <a href="/profile">Hola chaval</a>
        </div>
      </header>
    </React.Fragment>
  );
}