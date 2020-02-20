import React, { useState } from "react";
import { Rating } from "@material-ui/lab";

export function StarsForRating(talla) {
  const [value, setValue] = useState();

  return (
    <Rating
      name="simple-controlled"
      value={value}
      size={talla}
      onChange={newValue => setValue(newValue)}
    />
  );
}