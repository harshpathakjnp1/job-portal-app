import React from "react";

export const InputField = ({ handleChange, value, title, name }) => {
  return (
    <label className="sidebar-label-container">
      <input type="radio" name={name} value={value} onChange={handleChange} />
      <span className="checkmark"></span>
      {title}
    </label>
  );
};
