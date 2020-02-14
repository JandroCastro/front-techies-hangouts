import React, { useState, useEffect } from "react";

import { useSpring, animated } from "react-spring";
import { getThematicName, getCityName } from "../http/utilitiesService";
import { AsistenteQuedada } from "./AsistenteQuedada";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 10,
  (x - window.innerWidth / 2) / 10,
  1.1
];
const trans = (x, y, s) => `scale(${s})`;

export function HangoutCards({ event }) {
  const [city, setCity] = useState("");
  const [thematic, setThematic] = useState("");
  const [noVisible, setNoVisible] = useState(true);

  const date = event.event_date.split("T");
  const hour = event.event_hour.substring(0, 5);

  useEffect(() => {
    getCityName(event.city_id).then(response => {
      setCity(response.data[0].name);
    });
    getThematicName(event.thematic_id).then(response => {
      setThematic(response.data[0].name);
    });
  }, []);

  //console.log(event);

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 250, friction: 30 }
  }));
  return (
    <animated.div
      onMouseEnter={function() {
        setNoVisible(false);
      }}
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={function() {
        set({ xys: [0, 0, 1] });
        setNoVisible(true);
      }}
      style={{
        transform: props.xys.interpolate(trans)
      }}
    >
      <div
        id="hangout-img"
        style={{ backgroundImage: "url(" + event.photo_url + ")" }}
      ></div>
      <div id="hangout-info">
        <h3>{event.title}</h3>
        <div>
          <h5>{city}</h5>
          <h5>
            {date[0]} {hour}
          </h5>
          <h5>{thematic}</h5>
        </div>
        <div id={noVisible && "event-organizator"}>
          <AsistenteQuedada id={event.user_id} />
        </div>
      </div>
    </animated.div>
  );
}
