import React, { useState, useEffect } from "react";

import { useSpring, animated } from "react-spring";
import { AsistenteQuedada } from "./AsistenteQuedada";
import {
  checkInToHangout,
  getHangoutAttendance
} from "../http/attendanceService";
import { useHistory } from "react-router-dom";
import { isAlreadyAnnotated } from "../http/usefulFunctions";
import { LogicButton } from "./LogicButton";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 10,
  (x - window.innerWidth / 2) / 10,
  1.02
];
const trans = (x, y, s) => `scale(${s})`;

export function HangoutCards({ event }) {
  const history = useHistory();

  const [noVisible, setNoVisible] = useState(true);

  const date = event.event_date.split("T");
  const hour = event.event_hour.substring(0, 5);

  console.log(event);

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
        <LogicButton hangoutId={event.id} organizatorId={event.user_id} />
        <div id="event-organizator">
          <AsistenteQuedada event={event} />
        </div>
      </div>
    </animated.div>
  );
}
