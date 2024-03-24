import React from "react";
import { InputField } from "../InputField";

export const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div>
        <InputField
          handleChange={handleChange}
          value=""
          title="All"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="london"
          title="London"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="seattle"
          title="Seattle"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="madrid"
          title="Madrid"
          name="test"
        />
        <InputField
          handleChange={handleChange}
          value="boston"
          title="Boston"
          name="test"
        />
      </div>
    </div>
  );
};
