import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { getAllCities, getAllThematics } from "../http/utilitiesService";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FileUpload from "../components/FileUpload";
import { useHistory } from "react-router-dom";
import { createHangout } from "../http/hangoutsService";
import { useForm } from "react-hook-form";
import { parseDatepicker } from "../http/usefulFunctions";

export function CreateHangout() {
  const { handleSubmit, register } = useForm({
    mode: "onBlur"
  });
  const history = useHistory();

  const [cities, setCities] = useState([]);
  const [thematics, setThematics] = useState([]);
  const [hangout, setHangout] = useState({
    title: null,
    description: null,
    photo_url: null,
    address: null,
    place: null,
    date: null,
    hour: null,
    thematic_id: null,
    city_id: null,
    max_capacity: 30
  });

  const [startDate, setStartDate] = useState(new Date());

  useEffect(() => {
    getAllCities().then(response => setCities(response.data));
    getAllThematics().then(response => setThematics(response.data));
  }, []);

  const publishHangout = hangout => {
    console.log(hangout);
    return createHangout(hangout)
      .then(res => {
        console.log(res.data);
        history.push("/principal");
      })
      .catch(error => {
        console.log(error);
      });
  };
  console.log(hangout);

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
          <DatePicker
            selected={startDate || hangout.event_date.toISOString()}
            ref={register({
              required: "The field is mandatory"
            })}
            onChange={day => {
              setStartDate(day);
              setHangout({ ...hangout, date: parseDatepicker(day) });
            }}
          />

          <label className="label">Hora</label>
          <input
            pattern="^([01]?[0-9]|2[0-3]):[0-5][0-9](:[0-5][0-9])?$"
            ref={register({
              required: "The field is mandatory"
            })}
            name="hour"
            onChange={e => setHangout({ ...hangout, hour: e.target.value })}
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
            onChange={e => setHangout({ ...hangout, title: e.target.value })}
            required
          />
          <label className="label">Dirección</label>
          <input
            ref={register({
              required: "The field is mandatory"
            })}
            onChange={e => setHangout({ ...hangout, address: e.target.value })}
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
            onChange={e => setHangout({ ...hangout, place: e.target.value })}
            required
          />
          <label className="label"> Selecciona una ciudad</label>

          <select
            ref={register({
              required: "The field is mandatory"
            })}
            onChange={e =>
              setHangout({
                ...hangout,
                city_id: e.target.value === "value1" ? null : e.target.value
              })
            }
            name="city_id"
          >
            {cities.map(d => {
              return <option value={d.id}>{d.name}</option>;
            })}
            <option value="value1">Selecciona una Ciudad</option>
          </select>
          <label className="label"> De qué se va a hablar? </label>

          <select
            ref={register({
              required: "The field is mandatory"
            })}
            onChange={e =>
              setHangout({
                ...hangout,
                thematic_id: e.target.value === "value1" ? null : e.target.value
              })
            }
            name="thematic_id"
          >
            {thematics.map(d => {
              return <option value={d.id}>{d.name}</option>;
            })}
            <option value="value1">Selecciona una temática</option>
          </select>
          <label className="label"> Selecciona una foto para el evento</label>
          <div className="fileupload">
            <FileUpload
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
            onChange={e =>
              setHangout({ ...hangout, description: e.target.value })
            }
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
