import React from "react";
import { shortCodeLinks, translate } from "./Helpers";

function WorkActivity({ id, date, title, description, tags, language }) {
  let displayTitle = translate(title, language);

  return (
    <div className="item-container">
      {id} {date} <b>{displayTitle}</b> {}
      {shortCodeLinks(description)}
      <span> Tags: {tags && tags.join(", ")} </span>
    </div>
  );
}

export default WorkActivity;
