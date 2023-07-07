import React from "react";
import { underline } from "./Helpers";

const hm = (text) => underline(text, "Andrea Addis");

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
    <div className="item-container">
      {id} {title}; Authors: {hm(authors)}; Source: {source}; Source
      Coordinates: {sourceCoordinates}; Publisher: {publisher}; Date: {date};
      Links:
      <ul className="publication-links">
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
