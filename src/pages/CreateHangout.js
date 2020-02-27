import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { getAllCities, getAllThematics } from "../http/utilitiesService";

import FileUpload from "../components/FileUpload";
import { useHistory } from "react-router-dom";
import { createHangout } from "../http/hangoutsService";
import { useForm } from "react-hook-form";
import { parseDate } from "../http/usefulFunctions";

export function CreateHangout() {
  const { handleSubmit, register } = useForm({
    mode: "onBlur"
  });
  const history = useHistory();

  const [date, setDate] = useState("");
  const [cities, setCities] = useState([]);
  const [thematics, setThematics] = useState([]);

  const parseDate = object => {
    const date = JSON.stringify(object).substring(1, 11);
    return date;
  };

  useEffect(() => {
    getAllCities().then(response => setCities(response.data));
    getAllThematics().then(response => setThematics(response.data));
  }, []);

  const publishHangout = formData => {
    console.log(formData);
    return createHangout(formData)
      .then(res => {
        console.log(res.data);
        history.push("/principal");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Header title="CREA TU EVENTO" />
      <div>
        <form
          onSubmit={handleSubmit(publishHangout)}
          className="hangout"
          action="#"
        >
          <label className="label">Fecha</label>
          <input
            type="text"
            pattern="^\d{4}([\-/.])(0?[1-9]|1[1-2])\1(3[01]|[12][0-9]|0?[1-9])$"
            ref={register({
              required: "The field is mandatory"
            })}
            name="date"
            handleChange={day => setDate(parseDate(day))}
            placeholder="Introduce la fecha del evento en formato: YY-MM-dd"
          />

          <label className="label">Hora</label>
          <input
            pattern="^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$"
            ref={register({
              required: "The field is mandatory"
            })}
            name="hour"
            type="text"
            placeholder="H:MM:SS "
            required
          />

          <label className="label">Título</label>
          <input
            ref={register({
              required: "The field is mandatory"
            })}
            name="title"
            type="text"
            placeholder="introduce un título"
            required
          />
          <label className="label">Dirección</label>
          <input
            ref={register({
              required: "The field is mandatory"
            })}
            name="address"
            type="text"
            placeholder="introduce una dirección"
            required
          />
          <label className="label"> Nombre del Local</label>
          <input
            ref={register({
              required: "The field is mandatory"
            })}
            name="place"
            type="text"
            placeholder="introduce el nombre de un local"
            required
          />
          <select
            ref={register({
              required: "The field is mandatory"
            })}
            name="city_id"
          >
            {cities.map(d => {
              return <option value={d.id}>{d.name}</option>;
            })}
            <option value="value1">Selecciona una Ciudad</option>
          </select>
          <select
            ref={register({
              required: "The field is mandatory"
            })}
            name="thematic_id"
          >
            {thematics.map(d => {
              return <option value={d.id}>{d.name}</option>;
            })}
            <option value="value1">Selecciona una temática</option>
          </select>
          <label className="label"> Selecciona una foto para el evento</label>
          <div className="fileupload">
            <input
              required
              ref={register({
                required: "The field is mandatory"
              })}
              name="photo_url"
            />
          </div>
          <label className="label">Descripción</label>
          <textarea
            ref={register({
              required: "The field is mandatory"
            })}
            name="description"
            id="textarea"
            type="textarea"
            placeholder="introduce una breve descripción sobre el evento"
            required
          />
          <button id="login-page" className="btn" type="submit">
            CREAR
          </button>
        </form>
      </div>

      <Footer />
    </React.Fragment>
  );
}
