import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "../ur_libs/LanguageContext";
import NavBar from "../ur_libs/NavBar";

import { paths } from "../ur_kb/paths_cv.js";

export default function App() {
  return (
    <Router basename="/ReactCV">
      <LanguageProvider>
        <div className="App">
          <NavBar paths={paths} />

          <Routes>
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
