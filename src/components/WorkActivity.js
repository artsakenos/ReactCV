import React from "react";
import { automaticLinks } from "./Helpers";

function WorkActivity({ id, date, title, description, tags, language }) {
  let displayTitle = "";
  if (language != null && title && title[language]) {
    displayTitle = title[language];
  }

  return (
    <div className="item-container">
      {id} {date} <b>{displayTitle}</b> {}
      {automaticLinks(description)}
      <span> Tags: {tags.join(", ")} </span>
    </div>
  );
}

export default WorkActivity;
