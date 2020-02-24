import React, { useState, useEffect } from "react";
import { MiniCardHangout } from "../components/MiniCardHangout";
import { getAcceptedAttendance } from "../http/attendanceService";
import { useHistory } from "react-router-dom";

export function EventCard({ event, votar }) {
  const [asistentes, setAsistentes] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getAcceptedAttendance(event.id).then(response =>
      setAsistentes(response.data)
    );
  }, []);

  const date = event.event_date.substring(0, 10);

  return (
    <div className="eventCard">
      <section /*onClick={history.push(`/hangout/${event.id}`)}*/>
        <div
          id="hangout-img"
          style={{ backgroundImage: "url(" + event.photo_url + ")" }}
        ></div>
        <ul id="eventCard-info">
          <li>{date}</li>
          <li>{event.title}</li>
          <li>{event.cityName}</li>
        </ul>
      </section>
      <ul id="eventCard-attendants">
        <h5>Asistentes:</h5>
        {asistentes.map(asistente => (
          <li>
            <MiniCardHangout user={asistente} voting={votar} />
          </li>
        ))}
      </ul>
    </div>
  );
}
