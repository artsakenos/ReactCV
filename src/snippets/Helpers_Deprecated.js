import React from "react";
import { Link } from "react-router-dom";
import { renderToString } from "react-dom/server";

/**
 * Non Va bene, restituisce degli object.
 * @param {string} text The Text
 */
const shortCodeLinks_NO = (text) => {
  const linkPattern = /\[(\w+)\]/g;
  return text.replace(linkPattern, (match, id) => {
    const link = (
      <Link key={id} to={`/publications?id=${id}`}>
        {match}
      </Link>
    );
    return link;
  });
};

export const shortCodeLinks_pubs = (text) => {
  const linkPattern = /\[(\w+)\]/g;
  return (
    <>
      <span
        dangerouslySetInnerHTML={{
          __html: text.replace(linkPattern, (match, id) => {
            return "<a href='/publications?id=" + match + "'>" + id + "</a>";
          })
        }}
      ></span>
    </>
  );
};
