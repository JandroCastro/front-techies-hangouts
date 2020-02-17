import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AvatarContainer } from "../components/AvatarContainer";
import { getOneHangout } from "../http/hangoutsService";
import {
  getAcceptedAttendance,
  getPendingAttendance,
  acceptAttendance
} from "../http/attendanceService";
import { Map } from "../components/Map";
import { ProfileCards } from "../components/ProfileCards";
import { useParams } from "react-router-dom";
import { getThematicName, getCityName } from "../http/utilitiesService";

export function DetailedHangout() {
  const { id } = useParams();

  const storedUser = JSON.parse(localStorage.getItem("currentUser"));

  const [hangout, setHangout] = useState({});

  const [city, setCity] = useState("");
  const [thematic, setThematic] = useState("");

  const [confirmedGuest, setConfirmedGuest] = useState([]);
  const [pendingGuest, setPendingGuest] = useState([]);

  useEffect(() => {
    getOneHangout(id).then(response => setHangout(response.data[0]));
    getAcceptedAttendance(id).then(response =>
      setConfirmedGuest(response.data)
    );
    getPendingAttendance(id).then(response => setPendingGuest(response.data));
  }, [confirmedGuest, pendingGuest]);

  /*useEffect(() => {
    getCityName(hangout[0].city_id).then(response => {
      setCity(response.data[0].name);
    });
    getThematicName(hangout[0].thematic_id).then(response => {
      setThematic(response.data[0].name);
    });
  }, []);*/

  const hasHangout = Object.keys(hangout).length > 0;
  if (!hasHangout) {
    return <div>Loading...</div>;
  }

  const date = hangout.event_date.split("T");
  const hour = hangout.event_hour.substring(0, 5);

  return (
    <React.Fragment>
      <Header title="TU EVENTO" />
      <main className="detailedHangout">
        <h1 style={{ marginTop: 16 }}>{hangout.title}</h1>
        <ul id="portada">
          <li id="fotoDeQuedada"></li>
          <li id="avatar">
            <AvatarContainer id={hangout.user_id} />
          </li>
          <li>
            <button id="anotarse">Anotarse</button>
          </li>
        </ul>

        <section id="info">
          <div id="datosQuedada">
            <ul>
              <h3>Detalles</h3>
              <li>{city || "Cargando"}</li>
              <li>{date}</li>
              <li>{hour}</li>
              <li>{thematic || "Cargando"}</li>
              <li>{hangout.description}</li>
              <li>Mapa</li>
              <li>
                <button
                  className="ghost"
                  onClick={() => (window.location.href = "/create/hangout")}
                  id="editar"
                >
                  editar quedada
                </button>
              </li>
            </ul>
          </div>
          <div id="detallesAsistentes">
            <ul id="confirmados">
              <h3>Confirmados</h3>
              {confirmedGuest.map(guest => (
                <li>
                  <ProfileCards
                    id={confirmedGuest.id_users}
                    manageAttendance={false}
                  />
                </li>
              ))}
              <li>
                <ProfileCards />
              </li>
              <li>
                <ProfileCards />
              </li>
              <li>
                <ProfileCards />
              </li>
            </ul>
            <ul id="pendientes">
              <h3>Pendientes</h3>
              {pendingGuest.map(guest => (
                <li>
                  <ProfileCards
                    id={pendingGuest.id_users}
                    manageAttendance={
                      storedUser.id === hangout.user_id ? true : false
                    }
                  />
                </li>
              ))}
              <li>
                <ProfileCards />
              </li>
              <li>
                <ProfileCards />
              </li>
              <li>
                <ProfileCards />
              </li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
