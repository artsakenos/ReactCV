import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import WorkActivity from "./WorkActivity";
import { LanguageContext } from "../../ur_libs/LanguageContext";
import workActivitiesData_2000_2009 from "../../ur_kb/CV_WorkActivities_2000-2009.json";
import workActivitiesData_2010_2014 from "../../ur_kb/CV_WorkActivities_2010-2014.json";
import workActivitiesData_2015_2019 from "../../ur_kb/CV_WorkActivities_2015-2019.json";
import workActivitiesData_2020_2024 from "../../ur_kb/CV_WorkActivities_2020-2024.json";
import workActivitiesData_2025_2029 from "../../ur_kb/CV_WorkActivities_2025-2029.json";
import "bootstrap/dist/css/bootstrap.min.css";

export default function WorkActivities() {
  const [filters, setFilters] = useState({
    technology: "",
    id: ""
  });
  const location = useLocation();
  const { currentLanguage } = useContext(LanguageContext);

  const workActivitiesData = [
    ...workActivitiesData_2000_2009,
    ...workActivitiesData_2010_2014,
    ...workActivitiesData_2015_2019,
    ...workActivitiesData_2020_2024,
    ...workActivitiesData_2025_2029
  ];

  // Estrai tutte le tecnologie disponibili e ordinale
  const availableTechnologies = [...new Set(
    workActivitiesData.flatMap(workActivity => workActivity.technologies || [])
  )].sort();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);

    setFilters({
      technology: queryParams.get("technology") || "",
      id: queryParams.get("id") || ""
    });
  }, [location.search]);

  const handleFilterChange = (field, value) => {
    setFilters(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const filteredWorkActivities = workActivitiesData.filter(workActivity =>
    (!filters.technology || (workActivity.technologies && workActivity.technologies.includes(filters.technology))) &&
    (!filters.id || workActivity.id.includes(filters.id))
  );

  return (
    <div className="container-fluid py-4">
      <div className="row mb-4">
        <div className="col-12">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white">
              <h3 className="mb-0">Work Activities</h3>
            </div>
            <div className="card-body">
              <div className="row g-3">
                <div className="col-md-6">
                  <select
                    className="form-select"
                    value={filters.technology}
                    onChange={(e) => handleFilterChange("technology", e.target.value)}
                  >
                    <option value="">All Technologies</option>
                    {availableTechnologies.map(technology => (
                      <option key={technology} value={technology}>
                        {technology}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    value={filters.id}
                    onChange={(e) => handleFilterChange("id", e.target.value)}
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
          {filteredWorkActivities.length > 0 ? (
            <div>
              {filteredWorkActivities
                .sort((a, b) => { return b.date_begin.localeCompare(a.date_begin); })
                .map(workActivity => (
                  <div key={workActivity.id} className="list-group-item list-group-item-action">
                    <WorkActivity
                      {...workActivity}
                      language={currentLanguage}
                    />
                  </div>
                ))
              }
            </div>
          ) : (
            <div className="alert alert-info">
              No work activities found matching the current filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}