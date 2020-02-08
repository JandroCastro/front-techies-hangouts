import React from "react";
import { Rating } from "@material-ui/lab";

export function Stars(media, handleChange) {
  return (
    <Rating
      name="size-large"
      size="large"
      onChange={handleChange}
      value={media}
    />
  );
}
