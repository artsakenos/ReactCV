import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Publication from "../components/Publication";
import publicationsData from "../json/CV_Publications.json";

export default function Publications() {
  const [selectedType, setSelectedType] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get("type");
    const id = queryParams.get("id");

    if (type) {
      setSelectedType(type);
    } else {
      setSelectedType("");
    }

    if (id) {
      setSelectedId(id);
    } else {
      setSelectedId("");
    }
  }, [location.search]);

  const types = Array.from(new Set(publicationsData.map((p) => p.type)));

  const filteredPublications = publicationsData
    .filter(
      ({ type, id }) =>
        (!selectedType || type === selectedType) &&
        (!selectedId || id.includes(selectedId))
    )
    .sort((a, b) => a.id.localeCompare(b.id));

  return (
    <div className="content-container">
      <div className="content-header">
        <h1>Publications</h1>

        <label>
          Type:
          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">All</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          ID:
          <input
            type="text"
            value={selectedId}
            onChange={(e) => setSelectedId(e.target.value)}
          />
        </label>
      </div>
      {filteredPublications.map((publication) => (
        <Publication key={publication.id} {...publication} />
      ))}
    </div>
  );
}
