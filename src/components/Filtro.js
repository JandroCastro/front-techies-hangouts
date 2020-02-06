import React from "react";

export function Filter({ data, label }) {
  return (
    <React.Fragment>
      <label>{label}</label>
      <select>
        {data.map(city => {
          return <option>{city.name}</option>;
        })}
        <option value="value1">----------------------</option>
      </select>
    </React.Fragment>
  );
}
