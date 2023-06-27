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
    <div>
      <h2>
        {id}:{title}
      </h2>
      <p>
        <strong>Authors:</strong> {authors}
      </p>
      <p>
        <strong>Source:</strong> {source}
      </p>
      <p>
        <strong>Source Coordinates:</strong> {sourceCoordinates}
      </p>
      <p>
        <strong>Publisher:</strong> {publisher}
      </p>
      <p>
        <strong>Date:</strong> {date}
      </p>
      <p>
        <strong>Links:</strong>
      </p>
      <ul>
        {links &&
          links.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
      </ul>
    </div>
  );
}
