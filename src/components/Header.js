import React from "react";

export function Header({ title }) {
  return (
    <React.Fragment>
      <header>
        <a href="/home">
          <img src="https://image.flaticon.com/icons/svg/25/25694.svg" />
        </a>
        <h1>
          <a href="/home">{title}</a>
        </h1>

        <div>
          <a href="/profile">Hola chaval</a>
        </div>
      </header>
    </React.Fragment>
  );
}
