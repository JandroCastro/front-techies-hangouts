import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

export function Datepicker() {
  const [date, setDate] = useState(new Date());
  return (
    <DatePicker
      placeholderText="Click to select a date"
      dateFormat="yyyy/MM/dd"
      selected={date}
      onChange={dateChanged => setDate(dateChanged)}
    />
  );
}
