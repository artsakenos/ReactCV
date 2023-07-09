import React from "react";
import { Link } from "react-router-dom";
import { renderToString } from "react-dom/server";

const automaticLinks_NOTOK = (description) => {
  const linkPattern = /\[(\w+)\]/g;
  return description.replace(linkPattern, (match, id) => {
    const link = (
      <Link key={id} to={`/publications?id=${id}`}>
        {match}
      </Link>
    );
    return link;
  });
};

export const automaticLinks = (description) => {
  const linkPattern = /\[(\w+)\]/g;
  return (
    <>
      <span
        dangerouslySetInnerHTML={{
          __html: description.replace(linkPattern, (match, id) => {
            return "<a href='/publications?id=" + match + "'>" + id + "</a>";
          })
        }}
      ></span>
    </>
  );
};

/**
 * Sarebbe Automatic Links On Steroid.
 * Si può utilizzare per inserire links dove ci sono degli shortcodes del tipo [XX00].
 * @param {*} description La description da rielaborare
 */
export const automaticLinks_OS = (description) => {
  const linkPattern = /\[(\w{2})(\d{2})\]/g;
  return (
    <>
      <span
        dangerouslySetInnerHTML={{
          __html: description.replace(linkPattern, (match, type, id) => {
            let link = "";
            if (type === "IJ") {
              link = "/publication?id=" + type + id;
            } else if (type === "BP") {
              link = "/publication?id=" + type + id;
            } else if (type === "WA") {
              link = "/work-activity/?id=" + type + id;
            }
            return "<a href='" + link + "'>" + match + "</a>";
          })
        }}
      ></span>
    </>
  );
};

export const underline = (text, keyword) => {
  if (!text) return "";

  const parts = text.split(new RegExp(`(${keyword})`, "gi"));

  return (
    <span>
      {parts.map((part, index) =>
        part.toLowerCase() === keyword.toLowerCase() ? (
          <u key={index}>{part}</u>
        ) : (
          <React.Fragment key={index}>{part}</React.Fragment>
        )
      )}
    </span>
  );
};

/**
 * Traduce il testo, che può essere una stringa o un dizionario
 * @param {string|array} text_array E' una stringa (non traducibile) è un dizionario con le traduzioni.
 * @param {string|null} language può essere null o non essere presente. In quel caso viene restituito il primo elemento dell'array.
 */
export const translate = (text, language_code) => {
  // Se il testo è null, restituisci null
  if (text === null || typeof text === "string") {
    return text;
  }

  if (typeof text === "object") {
    if (language_code && text.hasOwnProperty(language_code)) {
      return text[language_code];
    }

    const firstKey = Object.keys(text)[0];
    return text[firstKey];
  }
};
