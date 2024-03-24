import React from "react";

export const JobsPage = ({ result }) => {
  return (
    <>
      <div>
        <h3 className="text-lg font-bold mb-2">{result.length} Jobs</h3>
      </div>
      <div>{result}</div>
    </>
  );
};
