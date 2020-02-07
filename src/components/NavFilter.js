import React from "react";
import { Datepicker } from "./Datepicker";

import { Filter } from "./Filtro";

export function NavFilter({ optionCities, optionThematics }) {
  return (
    <nav className="nav-filter">
      <ul>
        <li>
          <Filter label={"Ciudades"} data={optionCities} />
        </li>
        <li>
          <Filter label={"Temáticas"} data={optionThematics} />
        </li>
        <li>
          <label>Fecha</label>
          <Datepicker />
        </li>
      </ul>
      <button id="login-page">Filtrar</button>
    </nav>
  );
}
