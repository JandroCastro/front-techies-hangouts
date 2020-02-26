import React, { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { AvatarContainer } from "../components/AvatarContainer";
import { getOneHangout, deleteOneHangout } from "../http/hangoutsService";
import { getHangoutAttendance } from "../http/attendanceService";
import { Map } from "../components/Map";
import { ProfileCards } from "../components/ProfileCards";
import { useParams, useHistory } from "react-router-dom";
import {
  filterAcceptedRequest,
  filterPendignRequest
} from "../http/usefulFunctions";
import { LogicButton } from "../components/LogicButton";

export function DetailedHangout() {
  const storedUser = JSON.parse(localStorage.getItem("currentUser"));
  const history = useHistory();
  const { id } = useParams();

  const [hangout, setHangout] = useState({});

  const [attendance, setAttendance] = useState([]);

  useEffect(() => {
    getOneHangout(id).then(response => setHangout(response.data[0]));
  }, [id]);

  useEffect(() => {
    getHangoutAttendance(id).then(response => setAttendance(response.data));
  }, [id]);

  const isUserAdmin = storedUser.userId === hangout.user_id ? true : false;

  const hasHangout = Object.keys(hangout).length > 0;

  if (!hasHangout) {
    return <div>Loading...</div>;
  }

  const date = hangout.event_date
    .substring(0, 10)
    .split("-")
    .reverse()
    .join("/");

  const hour = hangout.event_hour.substring(0, 5);

  return (
    <React.Fragment>
      <Header title="TU EVENTO" />
      <main className="detailedHangout">
        <h1 style={{ marginTop: 16 }}>{hangout.title}</h1>
        <div id="cabeceraDeQuedada">
          <div>
            {(
              <img
                id="hangout-img"
                alt="Imagen de quedada"
                src={hangout.photo_url}
              ></img>
            ) || "Cargando"}
          </div>

          <AvatarContainer id={hangout.user_id} />
        </div>
        <LogicButton hangoutId={hangout.id} organizatorId={hangout.user_id} />
        <section id="info">
          <div id="datosQuedada">
            <ul>
              <h3>Detalles</h3>
              <li>
                {hangout.cityName} , {hangout.place}
              </li>
              <li>{date}</li>
              <li>{hour}</li>
              <li>{hangout.thematicName}</li>
              <li>{hangout.description}</li>
              <li>Mapa</li>
              <li>
                <LogicButton
                  hangoutId={hangout.id}
                  organizatorId={hangout.user_id}
                />
              </li>
            </ul>
          </div>
          <div id="detallesAsistentes">
            <ul id="confirmados">
              <h3>Confirmados</h3>
              {filterAcceptedRequest(attendance).map(guest => (
                <li
                  onClick={() => history.push(`/profile/${guest.user_id}`)}
                  key={guest.user_id}
                >
                  <ProfileCards profile={guest} manageAttendance={false} />
                </li>
              )) || "Cargando"}
            </ul>
            <ul id="pendientes">
              <h3>Pendientes</h3>
              {filterPendignRequest(attendance).map(guest => (
                <li
                  onClick={() => history.push(`/profile/${guest.user_id}`)}
                  key={guest.user_id}
                >
                  <ProfileCards
                    profile={guest}
                    manageAttendance={
                      storedUser.userId === hangout.user_id ? true : false
                    }
                  />
                </li>
              ))}
            </ul>
            {isUserAdmin && (
              <button
                className="ghost"
                onClick={() =>
                  deleteOneHangout(id)
                    .then(() => history.push("/principal"))
                    .catch()
                }
                id="delete"
              >
                Eliminar Quedada
              </button>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </React.Fragment>
  );
}
