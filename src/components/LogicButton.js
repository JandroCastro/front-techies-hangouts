import React, { useState, useEffect } from "react";
import {
  getHangoutAttendance,
  checkInToHangout,
  getAllUserAttendance
} from "../http/attendanceService";
import { useHistory } from "react-router-dom";
import { isAlreadyAnnotated } from "../http/usefulFunctions";

export function LogicButton({ hangoutId, organizatorId }) {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const history = useHistory();

  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    getHangoutAttendance(hangoutId).then(response =>
      setAttendance(response.data)
    );
  }, []);

  const handleClick = () => {
    if (storedUser !== null) {
      return checkInToHangout(hangoutId)
        .then(() => {
          window.location.reload();
        })
        .catch(() => {
          history.push(`/hangout/${hangoutId}`);
        });
    } else {
      history.push(`/login?id=${hangoutId}`);
    }
  };

  if (storedUser === null) {
    return (
      <button className="ghost" onClick={handleClick} id="editar">
        Quiero ir!
      </button>
    );
  }

  const alreadyCheckedIn =
    false || isAlreadyAnnotated(storedUser.userId, attendance);
  const isUserAdmin = storedUser.userId === organizatorId ? true : false;

  return (
    <React.Fragment>
      {(isUserAdmin && (
        <button
          className="ghost"
          onClick={() => history.push(`/edit/hangout/${hangoutId}`)}
          id="editar"
        >
          editar quedada
        </button>
      )) ||
        (!isUserAdmin &&
          ((alreadyCheckedIn && (
            <span className="btn" id="alertaInscrito">
              Ya estás inscrito
            </span>
          )) ||
            (!alreadyCheckedIn && (
              <button className="ghost" onClick={handleClick} id="editar">
                Quiero ir!
              </button>
            ))))}
    </React.Fragment>
  );
}
