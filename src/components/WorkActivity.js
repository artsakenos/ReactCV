import React from "react";

function WorkActivity({ id, date, description, tags }) {
  return (
    <div>
      <h3>{id}</h3>
      {date && <p>Date: {date}</p>}
      <p>Description: {description}</p>
      <p>Tags: {tags.join(", ")}</p>
    </div>
  );
}

export default WorkActivity;
