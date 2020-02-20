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
      <ul>
        <li>{date}</li>
        <li>{event.title}</li>
        <li>{event.cityName}</li>
      </ul>
      <ul>
        <h3>Asistentes:</h3>
        {asistentes.map(asistente => (
          <li>
            <MiniCardHangout user={asistente} voting={votar} />
          </li>
        ))}
      </ul>
    </div>
  );
}
