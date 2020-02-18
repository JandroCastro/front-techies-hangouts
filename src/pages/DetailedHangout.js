import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AvatarContainer } from "../components/AvatarContainer";
import { getOneHangout } from "../http/hangoutsService";
import {
  getAcceptedAttendance,
  getPendingAttendance,
  checkInToHangout
} from "../http/attendanceService";
import { Map } from "../components/Map";
import { ProfileCards } from "../components/ProfileCards";
import { useParams, useHistory } from "react-router-dom";
import { ListaTematica } from "../components/ListaTematica";
import { ListaCiudad } from "../components/ListaCiudad";

export function DetailedHangout() {
  const history = useHistory();
  const { id } = useParams();

  const storedUser = JSON.parse(localStorage.getItem("currentUser"));

  const [hangout, setHangout] = useState({});

  const [confirmedGuest, setConfirmedGuest] = useState([]);
  const [pendingGuest, setPendingGuest] = useState([]);

  useEffect(() => {
    getOneHangout(id).then(response => setHangout(response.data[0]));
    getAcceptedAttendance(id).then(response =>
      setConfirmedGuest(response.data)
    );
    getPendingAttendance(id).then(response => setPendingGuest(response.data));
  }, []);

  const hasHangout = Object.keys(hangout).length > 0;
  const hasAttendance = pendingGuest.length !== 0;

  if (!hasHangout && !hasAttendance) {
    return <div>Loading...</div>;
  }

  const editOrCheckIn = storedUser.userId === hangout.user_id ? true : false;

  const date = hangout.event_date
    .substring(0, 10)
    .split("-")
    .reverse()
    .join("/");

  const hour = hangout.event_hour.substring(0, 5);

  const handleClick = () => {
    return checkInToHangout(hangout.id)
      .then(() => {})
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <React.Fragment>
      <Header title="TU EVENTO" />
      <main className="detailedHangout">
        <h1 style={{ marginTop: 16 }}>{hangout.title}</h1>
        <ul id="portada">
          <li>
            {<img alt="Imagen de quedada" src={hangout.photo_url}></img> ||
              "Cargando"}
          </li>

          <li id="avatar">
            <AvatarContainer id={hangout.user_id} />
          </li>
        </ul>
        {(editOrCheckIn && (
          <button
            className="ghost"
            onClick={() => history.push(`/edit/hangout/${id}`)}
            id="editar"
          >
            editar quedada
          </button>
        )) || (
          <button onClick={handleClick} className="btn">
            Anotarse
          </button>
        )}

        <section id="info">
          <div id="datosQuedada">
            <ul>
              <h3>Detalles</h3>
              <ListaCiudad id={hangout.city_id} />
              <li>{date}</li>
              <li>{hour}</li>
              <ListaTematica id={hangout.thematic_id} />
              <li>{hangout.description}</li>
              <li>Mapa</li>
              <li>
                {(editOrCheckIn && (
                  <button
                    className="ghost"
                    onClick={() => history.push(`/edit/hangout/${id}`)}
                    id="editar"
                  >
                    editar quedada
                  </button>
                )) || (
                  <button onClick={handleClick} className="btn">
                    Anotarse
                  </button>
                )}
              </li>
            </ul>
          </div>
          <div id="detallesAsistentes">
            <ul id="confirmados">
              <h3>Confirmados</h3>
              {confirmedGuest.map(guest => (
                <li>
                  <ProfileCards id={guest.id_users} manageAttendance={false} />
                </li>
              )) || "Cargando"}
            </ul>
            <ul id="pendientes">
              <h3>Pendientes</h3>
              {pendingGuest.map(guest => (
                <li>
                  <ProfileCards
                    id={guest.id_users}
                    manageAttendance={
                      storedUser.userId === hangout.user_id ? true : false
                    }
                  />
                </li>
              )) || "Cargando"}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
