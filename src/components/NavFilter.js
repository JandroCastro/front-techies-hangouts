import React, { useState } from "react";
import { Datepicker } from "./Datepicker";

import { Filter } from "./Filtro";

export function NavFilter({ optionCities, optionThematics, onFilter }) {
  const [state, setState] = useState({
    city_id: null,
    thematic_id: null,
    event_date: null
  });

  const parseDate = object => {
    const date = JSON.stringify(object).substring(1, 11);
    return date;
  };

  const handleClick = () => {
    onFilter(state);
  };

  return (
    <nav className="nav-filter">
      <ul>
        <li key="cityFilter">
          <Filter
            handleChange={e => {
              setState({
                ...state,
                city_id: e.target.value === "nada" ? null : e.target.value
              });
            }}
            label={"Ciudades"}
            data={optionCities}
          />
        </li>
        <li key="thematicFilter">
          <Filter
            handleChange={e =>
              setState({
                ...state,
                thematic_id: e.target.value === "nada" ? null : e.target.value
              })
            }
            label={"Temáticas"}
            data={optionThematics}
          />
        </li>
        <li key="dateFilter">
          <label id="fecha">Fecha</label>
          <Datepicker
            handleChange={day => {
              setState({ ...state, date_event: parseDate(day) });
            }}
          />
        </li>
      </ul>
      <button onClick={handleClick} className="btn" id="login-page">
        Filtrar
      </button>
    </nav>
  );
}
