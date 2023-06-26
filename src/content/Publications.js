import React from "react";

import Publication from "../components/Publication";
import publicationsData from "./CV_Publications.json";

export default function Publications() {
  return (
    <div>
      <h1>Publications</h1>
      {publicationsData.map((publication) => (
        <Publication key={publication.id} {...publication} />
      ))}
    </div>
  );
}
