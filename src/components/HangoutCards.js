import React, { useState } from "react";

import { useSpring, animated } from "react-spring";
import { AsistenteQuedada } from "./AsistenteQuedada";
import { checkInToHangout } from "../http/attendanceService";
import { useHistory } from "react-router-dom";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 10,
  (x - window.innerWidth / 2) / 10,
  1.02
];
const trans = (x, y, s) => `scale(${s})`;

export function HangoutCards({ event }) {
  const [noVisible, setNoVisible] = useState(true);

  const currentUser = localStorage.getItem("currentUser");

  const history = useHistory();

  const date = event.event_date.split("T");
  const hour = event.event_hour.substring(0, 5);

  const handleClick = () => {
    if (currentUser !== null) {
      return checkInToHangout(event.id)
        .then(() => {
          history.push(`/hangout/${event.id}`);
        })
        .catch(() => {
          history.push(`/hangout/${event.id}`);
        });
    } else {
      history.push(`/login?id=${event.id}`);
    }
  };

  //console.log(event);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 250, friction: 40 }
  }));
  return (
    <animated.div
      onMouseEnter={function() {
        setNoVisible(false);
      }}
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={function() {
        set({ xys: [0, 0, 1] });
        setNoVisible(true);
      }}
      className="card"
      style={{
        transform: props.xys.interpolate(trans)
      }}
    >
      <div
        id="hangout-img"
        style={{ backgroundImage: "url(" + event.photo_url + ")" }}
        onClick={() => history.push(`/hangout/${event.id}`)}
      ></div>
      <div id="hangout-info">
        <h3>{event.title}</h3>
        <div>
          <h5>{event.cityName}</h5>
          <h5>
            {date[0]} {hour}
          </h5>
          <h5>{event.thematicName}</h5>
        </div>
        <button className="btn" onClick={handleClick}>
          Quiero ir!
        </button>
        <div id="event-organizator">
          <AsistenteQuedada event={event} />
        </div>
      </div>
    </animated.div>
  );
}
