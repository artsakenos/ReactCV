import React from "react";
import { automaticLinks } from "./Helpers";

function WorkActivity({ id, date, description, tags }) {
  return (
    <div className="item-container">
      {id} {date}
      {automaticLinks(description)}
      <span> Tags: {tags.join(", ")} </span>
    </div>
  );
}

export default WorkActivity;
