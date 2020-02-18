import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { getAllCities, getAllThematics } from "../http/utilitiesService";
import { Datepicker } from "../components/Datepicker";

export function EditHangout() {
  const [cities, setCities] = useState([]);
  const [thematics, setThematics] = useState([]);

  useEffect(() => {
    getAllCities().then(response => setCities(response.data));
    getAllThematics().then(response => setThematics(response.data));
  }, []);

  return (
    <React.Fragment>
      <Header title="EDITA TU EVENTO" />
      <div>
        <form className="hangout" action="#">
          <label className="label">Fecha</label>
           <Datepicker /><label className="label">Título</label>
         
          <input type="text" placeholder="introduce un título" required/>
          <label className="label">Dirección</label>
          <input type="text" placeholder="introduce una dirección" />
          <label className="label"> Nombre del Local</label>
          <input type="text" placeholder="introduce el nombre de un local" />
          <select>
            {cities.map(d => {
              return <option>{d.name}</option>;
            })}
            <option value="value1">Selecciona una Ciudad</option>
          </select>
          <select>
            {thematics.map(d => {
              return <option>{d.name}</option>;
            })}
            <option value="value1">Selecciona una temática</option>
          </select>
          <label className="label">Descripción</label>
          <textarea
            id="textarea"
            type="text"
            placeholder="introduce una breve descripción sobre el evento"
          />
          <button id="login-page" className="btn" type="button">
            EDITAR
          </button>
        </form>
      </div>

      <Footer />
    </React.Fragment>
  );
}