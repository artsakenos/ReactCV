import React from "react";
import { shortCodeLinks, translate } from "../../ur_libs/Helpers";

function WorkActivity({ id, date_begin, date_end, name, description, technologies, links, activities, language }) {
  const displayTitle = translate(name, language);
  const dateRange = `${date_begin || ""} ${date_end ? `- ${date_end}` : ""}`.trim();

  return (
    <div className="single_card">
      [{id}] {dateRange && ` ${dateRange}`} {/* ID e date */}
      - <strong>{displayTitle}</strong> {/* Titolo */}
      - {description && <>{shortCodeLinks(description)}</>} {/* Descrizione */}
      {technologies && technologies.length > 0 && (
        <>
          <strong>Technologies:</strong> {technologies.join(", ")} {/* Tecnologie */}
        </>
      )} { }
      {activities && activities.length > 0 && (
        <>
          <strong>Activities:</strong> {activities.join(", ")} {/* Attività */}
        </>
      )} { }
      {links && links.length > 0 && (
        <>
          <strong>Links:</strong>{" "}
          {links.map((link, index) => (
            <span key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "none" }} // Stile per i link
              >
                {link.name}
              </a>
              {index < links.length - 1 ? ", " : ""}
            </span>
          ))}
        </>
      )}
    </div>
  );
};

export default WorkActivity;