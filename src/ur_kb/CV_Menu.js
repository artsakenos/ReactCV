import Publications from "../ur_components/cv/Publications";
import WorkActivities from "../ur_components/cv/WorkActivities";
import Home from "../ur_components/Home";
import Profiles from "../ur_components/cv/Profiles";
import {
  FTMEventsOrganization,
  FTMProfileData,
  FTMPublicationsNoName,
  FTMRefresherCourses,
  FTMTalksSeminars,
  TeachingActivity,
  ResearchActivityDetails
} from "../ur_components/cv/Furthermore";

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
  { label: "Profile", path: "/profile", component: Profiles },
  { label: "Work", path: "/work", component: WorkActivities },
  { label: "Research", path: "/publications", component: Publications },
  { label: "Teaching", path: "/teaching", component: TeachingActivity, },
  {
    label: "More",
    path: "/more",
    component: Profiles,
    submenus: [
      { label: "Talks and Seminars", path: "/more/talks_seminars", component: FTMTalksSeminars },
      { label: "Events Organization", path: "/more/events_organization", component: FTMEventsOrganization },
      { label: "Refresher Courses", path: "/more/refresher_courses", component: FTMRefresherCourses },
      { label: "Publications No Name", path: "/more/publications_noname", component: FTMPublicationsNoName },
      { label: "Research Activity Details", path: "/more/research_activity", component: ResearchActivityDetails }
    ]
  }
];
