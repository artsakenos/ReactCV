import React from "react";
import { shortCodeLinks, translate } from "../../ur_libs/Helpers";

function Publication({
  id,
  date,
  title,
  authors,
  type,
  source,
  coordinates,
  abstract,
  publisher,
  links,
  language
}) {
  const displayTitle = translate(title, language);
  console.log < ("PUB LANG:", language);

  // Stili per elementi specifici
  const titleStyle = {
    fontWeight: "bold"
  };

  const labelStyle = {
    fontWeight: "bold"
  };

  // Verifica se è un riferimento ad un'altra pubblicazione
  const isReference = source && source.startsWith("->");

  return (
    <div className="single_card">
      [{id}] {date && ` ${date}`} {/* ID e data */}
      - <span style={titleStyle}>{displayTitle}</span> {/* Titolo */}
      {authors && <> - {authors}</>} {/* Autori */}
      {type && type !== "" && <> - <span style={labelStyle}>Type:</span> {type}</>} {/* Tipo di pubblicazione */}
      {source && !isReference && <> - <span style={labelStyle}>Source:</span> {source}</>} {/* Fonte */}
      {isReference && <> - <span style={labelStyle}>Reference:</span> {source.substring(2)}</>} {/* Riferimento */}
      {coordinates && <> - <span style={labelStyle}>Coordinates:</span> {coordinates}</>} {/* Coordinate */}
      {abstract && <> - {shortCodeLinks(abstract)}</>} {/* Abstract */}
      {publisher && <> - <span style={labelStyle}>Publisher:</span> {publisher}</>} {/* Editore */}
      {links && links.length > 0 && (
        <>
          {" "}- <span style={labelStyle}>Links:</span>{" "}
          {links.map((link, index) => (
            <span key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#007bff", textDecoration: "none" }}
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
}

export default Publication;