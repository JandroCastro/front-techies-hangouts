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
    getAllUserAttendance(userId).then(response =>
      setHangouts(response.data[0])
    );
    setDate(new Date().toISOString());
    console.log(hangouts, todayDate);
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
          <h2>Eventos pendientes de asistir</h2>
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
          <h2>Eventos a los que has asistido</h2>
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
