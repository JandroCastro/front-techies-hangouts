import React from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function Datepicker({ handleChange }) {
  const date = new Date();
  return (
    <DatePicker id="datepicker"
      placeholderText="Click to select a date"
      dateFormat="yyyy-MM-dd"
      selected={date}
      onChange={handleChange}
    />
  );
}
