import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import WorkActivity from "../components/WorkActivity";
import workActivitiesData from "../json/CV_WorkActivities.json";

function WorkActivities() {
  const [selectedTag, setSelectedTag] = useState("");
  const [selectedId, setSelectedId] = useState("");
  const location = useLocation();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const tag = queryParams.get("tag");
    const id = queryParams.get("id");

    if (tag) {
      setSelectedTag(tag);
    } else {
      setSelectedTag("");
    }

    if (id) {
      setSelectedId(id);
    } else {
      setSelectedId("");
    }
  }, [location.search]);

  // Get all available tags from the work activities data
  const availableTags = [
    ...new Set(workActivitiesData.flatMap((workActivity) => workActivity.tags))
  ];

  // Filter work activities based on the selected tag and id
  const filteredWorkActivities = workActivitiesData.filter((workActivity) => {
    if (selectedTag && selectedId) {
      return (
        workActivity.tags.includes(selectedTag) &&
        workActivity.id === selectedId
      );
    } else if (selectedTag) {
      return workActivity.tags.includes(selectedTag);
    } else if (selectedId) {
      return workActivity.id === selectedId;
    }
    return true;
  });

  return (
    <div>
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

      {/* Display filtered work activities */}
      {filteredWorkActivities.map((workActivity) => (
        <WorkActivity key={workActivity.id} {...workActivity} />
      ))}
    </div>
  );
}

export default WorkActivities;
