import React, { useState, useEffect } from "react";
import { MiniCardHangout } from "../components/MiniCardHangout";
import { getAcceptedAttendance } from "../http/attendanceService";

export function EventCard({ event, readOnly }) {
  const [asistentes, setAsistentes] = useState([]);

  useEffect(() => {
    getAcceptedAttendance(event.id).then(response =>
      setAsistentes(response.data)
    );
  }, []);

  return (
    <React.Fragment>
      <div className="eventCard">
        <ul>
          <li>{event.event_date}</li>
          <li>{event.title}</li>
          <li>{event.city_id}</li>
          <li>Asistentes:</li>
        </ul>
        <ul>
          {asistentes.map(asistente => (
            <li>
              <MiniCardHangout user={asistente} onlyRead={readOnly} />
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  );
}
