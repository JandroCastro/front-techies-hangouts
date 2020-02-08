import React from "react";

export function Filter({ data, label }) {
  return (
    <React.Fragment>
      <label>{label}</label>
      <select>
        {data.map(d => {
          return <option>{d.name}</option>;
        })}
        <option value="value1">----------------------</option>
      </select>
    </React.Fragment>
  );
}
