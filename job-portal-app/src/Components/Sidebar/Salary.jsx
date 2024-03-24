import React from "react";
import Button from "./Button.jsx";
import { InputField } from "../InputField.jsx";

export const Salary = ({ handleChange, handleClick }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Salary</h4>
      <div className="nb-4">
        <Button onClickHandler={handleClick} value="" title="Hourly" />
        <Button onClickHandler={handleClick} value="Monthly" title="Monthly" />
        <Button onClickHandler={handleClick} value="Yearly" title="Yearly" />
      </div>
      <div className="mt-2">
        <InputField
          handleChange={handleChange}
          value=""
          title="All"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={30}
          title="< 30000K"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={50}
          title="< 50000K"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={80}
          title="< 80000K"
          name="test2"
        />
        <InputField
          handleChange={handleChange}
          value={100}
          title="< 100000K"
          name="test2"
        />
      </div>
    </div>
  );
};
