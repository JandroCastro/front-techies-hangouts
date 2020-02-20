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

  return (
    <React.Fragment>
      <Header title="TUS EVENTOS" />
      <main className="yourHangouts">
        <section id="organizadas">
          <h2>Eventos de los que eres organizador</h2>
          <ul>
            {getHangoutsWhereUserIsOrganizator(hangouts).map(hangout => {
              return (
                <li>
                  <EventCard event={hangout} votar={false} />
                </li>
              );
            })}
          </ul>
        </section>
        <section id="asistencias">
          <h2>Eventos pendientes de asistir</h2>
          <ul>
            {getHangoutsPendientesdeAsistencia(hangouts).map(hangout => {
              return (
                <li>
                  <EventCard event={hangout} votar={false} />
                </li>
              );
            })}
          </ul>
        </section>
        <section id="anotadas">
          <h2>Eventos a falta de confirmación</h2>
          <ul>
            {getHangoutsPendingToConfirm(hangouts).map(hangout => {
              return (
                <li>
                  <EventCard event={hangout} votar={false} />
                </li>
              );
            })}
          </ul>
        </section>
        <section id="pasadas">
          <h2>Eventos a los que has asistido</h2>
          <ul>
            {getHangoutsAssisted(hangouts).map(hangout => {
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
