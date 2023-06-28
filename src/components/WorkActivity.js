import React from "react";
import { automaticLinks } from "./Helpers";

function WorkActivity({ id, date, description, tags }) {
  return (
    <div className="item-container">
      {id} {date && <span>Date: {date}</span>}
      <span>Description: {automaticLinks(description)}</span>
      <span>Tags: {tags.join(", ")}</span>
    </div>
  );
}

export default WorkActivity;
