import React, { useState, useEffect } from "react";
import { getCityName } from "../http/utilitiesService";

export function ListaCiudad({ id }) {
  const [city, setCity] = useState("");

  useEffect(() => {
    getCityName(id).then(response => {
      setCity(response.data[0].name);
    });
  }, []);

  const hasInfo = city !== "";

  if (!hasInfo) {
    return <li>Loading...</li>;
  }

  return <li>{city}</li>;
}
