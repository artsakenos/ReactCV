import React from "react";

/**
 * Sarebbe Short Code Links On Steroid.
 * Sostituisce gli shortcodes [XX00] con il link appropriato.
 * @param {string} text Il testo da rielaborare
 */
export const shortCodeLinks = (text) => {
  const linkPattern = /\[(\w{2})(\d{2,4})\]/g; // Modificato per supportare sia 2 che 4 cifre
  return (
    <>
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(linkPattern, (match, type, id) => {
            let link = "";
            if (type === "IJ" || type === "BP" || type === "NC") {
              link = "/ReactCV/publications?id=" + type + id;
            } else if (type === "WA" || type === "DP") {
              link = "/ReactCV/work-activities/?id=" + type + id;
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
 * Traduce il testo, che può essere una stringa o un dizionario.
 * E.g., {translate({it: "Tutti i tags", zh: "所有tags" }, currentLanguage )}
 *
 * @param {string|object} text_array E' una stringa (non traducibile) è un dizionario con le traduzioni.
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

export function md2html(markdown) {
  return markdown.split("\n").map((paragraph, index) => {
    // Converti il **grassetto** in <strong>
    let formattedText = paragraph.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
    
    // Converti i [link](URL) in <a href="URL">testo</a>
    formattedText = formattedText.replace(/\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

    return (
      <p
        key={index}
        style={{ textAlign: "justify" }}
        dangerouslySetInnerHTML={{ __html: formattedText }}
      />
    );
  });
}
