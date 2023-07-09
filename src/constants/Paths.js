import Publications from "../content/Publications";
import WorkActivities from "../content/WorkActivities";
import Educations from "../content/Educations";

export const paths = [
  { label: "Publications", path: "/publications", component: Publications },
  {
    label: "Work Activities",
    path: "/work-activities",
    component: WorkActivities
  },
  {
    label: "Education",
    path: "/educations",
    component: Educations,
    submenus: [
      {
        label: "Education Sub",
        path: "/educations/sub",
        component: Educations
      }
    ]
  }
];
