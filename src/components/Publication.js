import React from "react";

export default function Publication({
  id,
  authors,
  title,
  source,
  sourceCoordinates,
  publisher,
  date,
  links
}) {
  return (
    <div className="publication-container">
      <div className="publication-info">
        {id}:{title}; Authors: {authors}; Source: {source}; Source Coordinates:{" "}
        {sourceCoordinates}; Publisher: {publisher}; Date: {date}; Links:
        <ul className="publication-links">
          {links &&
            links.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
