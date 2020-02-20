import React, { useState, useEffect } from "react";
import { Rating } from "@material-ui/lab";
import { getUserRatings } from "../http/ratingsService";
import { mediaRatings } from "../http/usefulFunctions";

export function StarsOnlyRead({ id, talla }) {
  const [ratings, setValue] = useState([]);
  const media = mediaRatings(ratings);

  useEffect(() => {
    getUserRatings(id)
      .then(response => setValue(response.data))
      .catch(error => {
        console.log(error);
      });
  }, []);

  return <Rating name="onlyRead" value={media} size={talla} />;
}
