import React from "react";
import { Datepicker } from "./Datepicker";

export function NavFilter() {
  return (
    <nav className="nav-filter">
      <ul>
        <li>
          <label>Ciudades</label>
          <select>
            <option>Lista Ciudades</option>
          </select>
        </li>
        <li>
          <label>Temáticas</label>
          <select>
            <option>Lista temáticas</option>
          </select>
        </li>
        <li>
          <label>Fecha</label>
          <Datepicker />
        </li>
      </ul>
      <button>Filtrar</button>
    </nav>
  );
}
