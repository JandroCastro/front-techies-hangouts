import React from "react";
import { Datepicker } from "./Datepicker";

import { Filter } from "./Filtro";
import { getHangoutsFiltered } from "../http/hangoutsService";

export function NavFilter({ optionCities, optionThematics }) {
  const handleClick = () => {
    return getHangoutsFiltered();
  };

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
      <button onClick={handleClick} className="btn" id="login-page">
        Filtrar
      </button>
    </nav>
  );
}
