import React, { useState } from "react";
import { Rating } from "@material-ui/lab";

export function Stars({ nameValue, valor, styleprop, talla }) {
  const [value, setValue] = useState(0);
  const [state, setState] = useState("");

  return (
    <Rating
      name={nameValue}
      {...state}
      value={valor}
      {...styleprop}
      size={talla}
      onChange={(event, newValue) => {
        setValue(newValue);
        setState("disabled")
      }}
    />
  );
}
