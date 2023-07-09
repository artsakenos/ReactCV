import "./styles.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./content/Home";
import NavBar from "./NavBar";
import { LanguageProvider } from "./LanguageContext";

import Publications from "./content/Publications";
import WorkActivities from "./content/WorkActivities";
import Educations from "./content/Educations";

const paths = [
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

export default function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="App">
          <NavBar paths={paths} />

          <Routes>
            <Route path="/" element={<Home />} />

            {paths.map((item) => (
              <React.Fragment key={item.path}>
                <Route path={item.path} element={<item.component />} />

                {item.submenus &&
                  item.submenus.map((submenu) => (
                    <Route
                      key={submenu.path}
                      path={submenu.path}
                      element={<submenu.component />}
                    />
                  ))}
              </React.Fragment>
            ))}
          </Routes>
        </div>
      </LanguageProvider>
    </Router>
  );
}
