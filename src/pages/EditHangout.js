import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { getAllCities, getAllThematics } from "../http/utilitiesService";
import { Datepicker } from "../components/Datepicker";
import FileUpload from "../components/FileUpload";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { editOneHangout, getOneHangout } from "../http/hangoutsService";

export function EditHangout() {
  const { handleSubmit, register } = useForm({
    mode: "onBlur"
  });

  const hangout_id = useParams();
  console.log(hangout_id);

  const history = useHistory();
  const [cities, setCities] = useState([]);
  const [thematics, setThematics] = useState([]);
  const [hangout, setHangout] = useState({});

  useEffect(() => {
    getAllCities().then(response => setCities(response.data));
    getAllThematics().then(response => setThematics(response.data));
    getOneHangout(hangout_id.id)
      .then(response => setHangout(response.data[0]))
      .catch();
  }, []);

  const hasHangout = Object.keys(hangout).length > 0;

  if (!hasHangout) {
    return <div>Loading...</div>;
  }

  const putHangout = formData => {
    console.log(formData);
    return editOneHangout(formData)
      .then(history.push(`/hangout/${hangout_id.id}`))
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <React.Fragment>
      <Header title="EDITA TU EVENTO" />
      <div>
        <form
          onSubmit={handleSubmit(putHangout)}
          className="hangout"
          action="#"
        >
          <label className="label">Fecha</label>
          <Datepicker
            value={hangout.date}
            ref={register({
              required: "The field is mandatory"
            })}
            name="date"
          />

          <label className="label">Hora</label>
          <input
            ref={register({
              required: "The field is mandatory"
            })}
            name="hour"
            type="text"
            placeholder="H:MM:SS "
            value={hangout.hour}
          />
          <label className="label">Título</label>

          <input
            ref={register({
              required: "The field is mandatory"
            })}
            name="title"
            type="text"
            placeholder="introduce un título"
            value={hangout.title}
          />
          <label className="label">Dirección</label>
          <input
            ref={register({
              required: "The field is mandatory"
            })}
            name="address"
            type="text"
            placeholder="introduce una dirección"
            value={hangout.address}
          />
          <label className="label"> Nombre del Local</label>
          <input
            ref={register({
              required: "The field is mandatory"
            })}
            name="place"
            type="text"
            placeholder="introduce el nombre de un local"
            value={hangout.place}
          />
          <select
            ref={register({
              required: "The field is mandatory"
            })}
            name="city_id"
            value={hangout.city_id}
          >
            {cities.map(d => {
              return <option>{d.name}</option>;
            })}
            <option value="value1">Selecciona una Ciudad</option>
          </select>
          <select
            ref={register({
              required: "The field is mandatory"
            })}
            name="thematic_id"
            value={hangout.thematic_id}
          >
            {thematics.map(d => {
              return <option>{d.name}</option>;
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
              value={hangout.photo_url}
            />
          </div>
          <label className="label">Descripción</label>
          <textarea
            ref={register({
              required: "The field is mandatory"
            })}
            name="descripcion"
            value={hangout.description}
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
