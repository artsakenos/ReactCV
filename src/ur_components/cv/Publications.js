import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Publication from "./Publication";
import publicationsData_BLNCPR from "../../ur_kb/CV_Publications_BL-NC-PR.json";
import publicationsData_IC from "../../ur_kb/CV_Publications_IC.json";
import publicationsData_IJBC from "../../ur_kb/CV_Publications_IJ-BC.json";

export default function Publications() {

  const [filters, setFilters] = useState({
    type: "",
    id: ""
  });

  const location = useLocation();

  const publicationsData = [
    ...publicationsData_BLNCPR,
    ...publicationsData_IC,
    ...publicationsData_IJBC
  ];

  // Estrai i tipi unici (calcolato una sola volta)
  const types = [...new Set(publicationsData.map(p => p.type))];

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    setFilters({
      type: queryParams.get("type") || "",
      id: queryParams.get("id") || ""
    });
  }, [location.search]);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const filteredPublications = publicationsData
    .filter(pub =>
      (!filters.type || pub.type === filters.type) &&
      (!filters.id || pub.id.includes(filters.id))
    )
    .sort((a, b) => a.id.localeCompare(b.id));

  return (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">

            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Publications</h3>
            </div>

            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <select
                    className="form-select"
                    value={filters.type}
                    onChange={e => handleFilterChange("type", e.target.value)}
                  >
                    <option value="">Publication Type</option>
                    {types.map(type => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    value={filters.id}
                    onChange={e => handleFilterChange("id", e.target.value)}
                    placeholder="Enter ID to search"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          {filteredPublications.length > 0 ? (
            <div>
              {filteredPublications
                .sort((a, b) => { return b.date.localeCompare(a.date); })
                .map(publication => (
                  <div key={publication.id} className="list-group-item list-group-item-action">
                    <Publication {...publication} />
                  </div>
                ))}
            </div>
          ) : (
            <div className="alert alert-info">
              No publications found matching the current filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}