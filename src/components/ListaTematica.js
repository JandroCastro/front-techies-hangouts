import React, { useState, useEffect } from "react";
import { getThematicName } from "../http/utilitiesService";

export function ListaTematica({ id }) {
  const [thematic, setThematic] = useState("");

  useEffect(() => {
    getThematicName(id).then(response => {
      setThematic(response.data[0].name);
    });
  }, []);

  const hasInfo = thematic !== "";

  if (!hasInfo) {
    return <div>Loading...</div>;
  }

  return <li>{thematic}</li>;
}
