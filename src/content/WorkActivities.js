import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { LanguageContext } from "../LanguageContext";

import WorkActivity from "../components/WorkActivity";
import workActivitiesData from "../json/CV_WorkActivities.json";

function WorkActivities() {
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const location = useLocation();
  const { currentLanguage } = useContext(LanguageContext);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tag = queryParams.get("tag");
    const id = queryParams.get("id");
    tag ? setSelectedTag(tag) : setSelectedTag("");
    id ? setSelectedId(id) : setSelectedId("");
  }, [location.search]);

  // Get all available tags from the work activities data
  const availableTags = [
    ...new Set(
      workActivitiesData.flatMap((workActivity) => workActivity.tags).sort()
    )
  ];

  // Filter work activities based on the selected tag and id
  const filteredWorkActivities = workActivitiesData.filter((workActivity) => {
    if (selectedTag && selectedId) {
      return (
        workActivity.tags.includes(selectedTag) &&
        workActivity.id.includes(selectedId)
      );
    } else if (selectedTag) {
      return workActivity.tags && workActivity.tags.includes(selectedTag);
    } else if (selectedId) {
      return workActivity.id.includes(selectedId);
    }
    return true;
  });

  return (
    <div className="content-container">
      <div className="content-header">
        <h1>Work Activities</h1>

        {/* Combobox to select the tag */}
        <select
          value={selectedTag}
          onChange={(e) => setSelectedTag(e.target.value)}
        >
          <option value="">All Tags</option>
          {availableTags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>

        {/* Input field to enter the id */}
        <input
          type="text"
          value={selectedId}
          onChange={(e) => setSelectedId(e.target.value)}
          placeholder="Enter ID"
        />
      </div>

      {/* Display filtered work activities */}
      {filteredWorkActivities.map((workActivity) => (
        <WorkActivity
          key={workActivity.id}
          {...workActivity}
          language={currentLanguage}
        />
      ))}
    </div>
  );
}

export default WorkActivities;
