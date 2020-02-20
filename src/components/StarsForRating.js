import React, { useState } from "react";
import { Rating } from "@material-ui/lab";
import { createRating } from "../http/ratingsService";

export function StarsForRating(talla, hangoutId, user_id) {
  const [value, setValue] = useState(0);
  const [props, setProps] = useState("");
  const [warning, setWarning] = useState(false);

  function handleChange(newValue) {
    setValue(newValue);
    const ratingData = {
      id_rated: user_id,
      rating: newValue
    };
    return createRating(hangoutId, ratingData)
      .then(response => {
        setProps("disabled");
        setWarning(true);
      })
      .catch();
  }

  return (
    <div>
      <Rating
        name="simple-controlled"
        value={value}
        size={talla}
        onChange={handleChange}
        {...props}
      />
      <span>{warning && "Ya has votado"}</span>
    </div>
  );
}
