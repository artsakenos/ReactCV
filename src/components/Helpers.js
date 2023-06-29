import React from "react";
import { Link } from "react-router-dom";
import { renderToString } from "react-dom/server";

const replaceWorkActivityLinks_old = (description) => {
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
