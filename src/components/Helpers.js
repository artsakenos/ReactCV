import React from "react";

/**
 * Sarebbe Short Code Links On Steroid.
 * Sostituisce gli shortcodes [XX00] con il link appropriato.
 * @param {string} text Il text da rielaborare
 */
export const shortCodeLinks = (text) => {
  const linkPattern = /\[(\w{2})(\d{2})\]/g;
  return (
    <>
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(linkPattern, (match, type, id) => {
            let link = "";
            if (type === "IJ" || type === "BP") {
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
