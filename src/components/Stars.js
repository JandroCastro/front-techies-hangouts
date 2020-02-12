import React from "react";
import { Rating } from "@material-ui/lab";

export function Stars({ nameValue, valor, styleprop, talla }) {
  return <Rating name={nameValue} value={valor} {...styleprop} size={talla} />;
}
