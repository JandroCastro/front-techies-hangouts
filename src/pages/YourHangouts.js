import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { getAllUserAttendance } from "../http/attendanceService";
import { EventCard } from "../components/EventCard";

export function YourHangouts() {
  const [hangouts, setHangouts] = useState([]);
  const [todayDate, setDate] = useState("");

  const { userId } = JSON.parse(localStorage.getItem("currentUser"));
  console.log(userId);

  useEffect(() => {
    console.log("Hola");
    getAllUserAttendance(userId).then(response => setHangouts(response.data));
    setDate(new Date().toISOString());
    console.log(hangouts, todayDate);
  }, []);

  return (
    <React.Fragment>
      <Header title="TUS EVENTOS" />
      <main className="yourHangouts">
        <h1>Tus Eventos</h1>

        <section id="organizadas">
          <h2>Quedadas de las que eres organizador</h2>
          <ul>
            {hangouts.filter(hangout => (
              <li>
                <EventCard
                  event={
                    hangout.id_users === hangout.user_id &&
                    hangout.event_date > todayDate
                  }
                  readOnly={true}
                />
              </li>
            ))}
          </ul>
        </section>
        <section id="asistencias">
          <h2>Quedadas pendientes de asistir</h2>
          <ul>
            {hangouts.filter(hangout => (
              <li>
                <EventCard
                  event={
                    hangout.id_users !== hangout.user_id &&
                    hangout.event_date > todayDate &&
                    hangout.request_status === "accepted"
                  }
                  readOnly={true}
                />
              </li>
            ))}
          </ul>
        </section>
        <section id="pasadas">
          <h2>Quedadas a las que has asistido</h2>
          <ul>
            {hangouts.filter(hangout => (
              <li>
                <EventCard
                  event={
                    hangout.event_date < todayDate &&
                    hangout.request_status === "accepted"
                  }
                  readOnly={false}
                />
              </li>
            ))}
            ;
          </ul>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
