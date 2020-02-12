import React from "react";

import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 10,
  (x - window.innerWidth / 2) / 10,
  1.1
];
const trans = (x, y, s) => `scale(${s})`;

export function HangoutCards({ prop }) {
  console.log(prop);
  const imgUrl =
    "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80";

  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 250, friction: 30 }
  }));
  return (
    <animated.div
      className="card"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{
        transform: props.xys.interpolate(trans),
        backgroundImage: "url(" + prop.photo_url + ")"
      }}
    >
      <div id="hangout-title">
        <h3>{prop.title}</h3>
      </div>
    </animated.div>
  );
}
