import Publications from "../content/Publications";
import WorkActivities from "../content/WorkActivities";
import Educations from "../content/Educations";
import Home from "../content/Home";

export const paths = [
  {
    labela: "Home",
    path: "/",
    component: Home,
    label: {
      it: "Casa",
      en: "Home",
      zh: "主页"
    }
  },
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
