import React, { useState, useEffect } from "react";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getAllCities, getAllThematics } from "../http/utilitiesService";
import FileUpload from "../components/FileUpload";
import { useParams, useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";
import { editOneHangout, getOneHangout } from "../http/hangoutsService";
import { parseDatepicker } from "../http/usefulFunctions";

export function EditHangout() {
  const { handleSubmit, register } = useForm({
    mode: "onBlur"
  });

  const hangout_id = useParams();

  const history = useHistory();
  const [cities, setCities] = useState([]);
  const [thematics, setThematics] = useState([]);
  const [hangout, setHangout] = useState({
    title: null,
    description: null,
    photo_url: null,
    address: null,
    place: null,
    event_date: null,
    event_hour: null,
    thematic_id: null,
    city_id: null,
    max_capacity: 30
  });
  const [startDate, setStartDate] = useState(new Date());

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

  console.log(hangout);

  const putHangout = hangout => {
    console.log(hangout);
    return editOneHangout(hangout_id, hangout)
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
          <DatePicker
            selected={startDate || hangout.event_date.toISOString()}
            ref={register({
              required: "The field is mandatory"
            })}
            name="event_date"
            onChange={day => {
              setStartDate(day);
              setHangout({ ...hangout, event_date: parseDatepicker(day) });
            }}
          />

          <label className="label">Hora</label>
          <input
            ref={register({
              required: "The field is mandatory"
            })}
            name="event_hour"
            type="text"
            placeholder="HH:MM:SS "
            value={hangout.event_hour}
            onChange={e =>
              setHangout({ ...hangout, event_hour: e.target.value })
            }
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
            onChange={e => setHangout({ ...hangout, title: e.target.value })}
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
            onChange={e => setHangout({ ...hangout, address: e.target.value })}
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
            onChange={e => setHangout({ ...hangout, place: e.target.value })}
          />
          <select
            ref={register({
              required: "The field is mandatory"
            })}
            name="city_id"
            value={hangout.city_id}
            onChange={e =>
              setHangout({
                ...hangout,
                city_id: e.target.value === "value1" ? null : e.target.value
              })
            }
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
            value={hangout.thematic_id}
            onChange={e =>
              setHangout({
                ...hangout,
                thematic_id: e.target.value === "value1" ? null : e.target.value
              })
            }
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
              onChange={e =>
                setHangout({ ...hangout, photo_url: e.target.value })
              }
            />
          </div>
          <label className="label">Descripción</label>
          <textarea
            ref={register({
              required: "The field is mandatory"
            })}
            name="description"
            value={hangout.description}
            id="textarea"
            type="text"
            placeholder="introduce una breve descripción sobre el evento"
            onChange={e =>
              setHangout({ ...hangout, description: e.target.value })
            }
          />
          <button id="login-page" className="btn" type="submit">
            EDITAR
          </button>
        </form>
      </div>

      <Footer />
    </React.Fragment>
  );
}
