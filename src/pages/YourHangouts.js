import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getAllUserAttendance } from "../http/attendanceService";
import { EventCard } from "../components/EventCard";
import {
  getHangoutsWhereUserIsOrganizator,
  getHangoutsPendientesdeAsistencia,
  getHangoutsAssisted,
  getHangoutsPendingToConfirm
} from "../http/usefulFunctions";

export function YourHangouts() {
  const [hangouts, setHangouts] = useState([]);

  const user = JSON.parse(localStorage.getItem("currentUser"));
  const userId = user.userId;

  useEffect(() => {
    getAllUserAttendance(userId).then(response => setHangouts(response.data));
  }, []);

  const hasHangouts = Object.keys(hangouts).length > 0;
  if (!hasHangouts) {
    return <div>Loading...</div>;
  }
  const organizadas = getHangoutsWhereUserIsOrganizator(hangouts);
  const aceptadas = getHangoutsPendientesdeAsistencia(hangouts);
  const pendientesDeRecibirAceptacion = getHangoutsPendingToConfirm(hangouts);
  const asistidas = getHangoutsAssisted(hangouts);

  return (
    <React.Fragment>
      <Header title="TUS EVENTOS" />
      <main className="yourHangouts">
        <section id="organizadas">
          <h2>
            Eventos de los que eres organizador {"(" + organizadas.length + ")"}
          </h2>
          <ul>
            {organizadas.map(hangout => {
              return (
                <li>
                  <EventCard event={hangout} votar={false} />
                </li>
              );
            })}
          </ul>
        </section>
        <section id="asistencias">
          <h2>Eventos pendientes de asistir {"(" + aceptadas.length + ")"}</h2>
          <ul>
            {aceptadas.map(hangout => {
              return (
                <li>
                  <EventCard event={hangout} votar={false} />
                </li>
              );
            })}
          </ul>
        </section>
        <section id="anotadas">
          <h2>
            Eventos a falta de confirmación{" "}
            {"(" + pendientesDeRecibirAceptacion.length + ")"}
          </h2>
          <ul>
            {pendientesDeRecibirAceptacion.map(hangout => {
              return (
                <li>
                  <EventCard event={hangout} votar={false} />
                </li>
              );
            })}
          </ul>
        </section>
        <section id="pasadas">
          <h2>Eventos a los que has asistido {"(" + asistidas.length + ")"}</h2>
          <ul>
            {asistidas.map(hangout => {
              return (
                <li>
                  <EventCard event={hangout} votar={true} />
                </li>
              );
            })}
          </ul>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
