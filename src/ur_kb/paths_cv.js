import Publications from "../ur_components/cv/Publications";
import WorkActivities from "../ur_components/cv/WorkActivities";
import Educations from "../ur_components/cv/Educations";
import Home from "../ur_components/cv/Home";

export const paths = [
  {
    labela: "Home",
    path: "/",
    component: Home,
    label: {
      en: "Home",
      it: "Casa",
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
