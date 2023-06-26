import React, { useState } from "react";

import WorkActivity from "../components/WorkActivity";
import workActivitiesData from "./CV_WorkActivities.json";

function WorkActivities() {
  const [selectedTag, setSelectedTag] = useState("");

  // Get all available tags from the work activities data
  const availableTags = [
    ...new Set(workActivitiesData.flatMap((workActivity) => workActivity.tags))
  ];

  // Filter work activities based on the selected tag
  const filteredWorkActivities = selectedTag
    ? workActivitiesData.filter((workActivity) =>
        workActivity.tags.includes(selectedTag)
      )
    : workActivitiesData;

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

      {/* Display filtered work activities */}
      {filteredWorkActivities.map((workActivity) => (
        <WorkActivity key={workActivity.id} {...workActivity} />
      ))}
    </div>
  );
}

export default WorkActivities;
