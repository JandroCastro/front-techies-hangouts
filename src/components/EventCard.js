import React, { useState, useEffect } from "react";
import { MiniCardHangout } from "../components/MiniCardHangout";
import { getAcceptedAttendance } from "../http/attendanceService";

export function EventCard({ event, votar }) {
  const [asistentes, setAsistentes] = useState([]);

  useEffect(() => {
    getAcceptedAttendance(event.id).then(response =>
      setAsistentes(response.data)
    );
  }, []);

  const date = event.event_date.substring(0, 10);

  return (
    <div className="eventCard">
      <div
        id="hangout-img"
        style={{ backgroundImage: "url(" + event.photo_url + ")" }}
      ></div>
      <ul id="eventCard-info">
        <li>{date}</li>
        <li>{event.title}</li>
        <li>{event.cityName}</li>
      </ul>
<<<<<<< HEAD
      <ul>
        <h3>Asistentes:</h3>
=======
      <ul id="eventCard-attendants">
        <p>Asistentes:</p>
>>>>>>> 1f9156d3db831f5d2e49f68d58013d0e6fab7ffc
        {asistentes.map(asistente => (
          <li>
            <MiniCardHangout user={asistente} voting={votar} />
          </li>
        ))}
      </ul>
    </div>
  );
}
