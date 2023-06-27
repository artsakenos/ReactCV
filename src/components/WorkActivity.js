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

const replaceWorkActivityLinks = (description) => {
  const linkPattern = /\[(\w+)\]/g;
  return (
    <>
      <div
        dangerouslySetInnerHTML={{
          __html: description.replace(linkPattern, (match, id) => {
            return "<a href='/publications?id=" + match + "'>" + id + "</a>";
          })
        }}
      ></div>
    </>
  );
};

function WorkActivity({ id, date, description, tags }) {
  return (
    <div>
      <h3>{id}</h3>
      {date && <p>Date: {date}</p>}
      <p>Description: {replaceWorkActivityLinks(description)}</p>
      <p>Tags: {tags.join(", ")}</p>
    </div>
  );
}

export default WorkActivity;
