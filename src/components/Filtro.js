import React from "react";

export function Filter({ data, label, handleChange }) {
  return (
    <React.Fragment>
      <label>{label}</label>
      <select onChange={handleChange}>
        {data.map(d => {
          return (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          );
        })}
        <option value="value1">----------------------</option>
      </select>
    </React.Fragment>
  );
}
