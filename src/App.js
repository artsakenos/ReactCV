import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";
import Home from "./content/Home";
import NavBar from "./NavBar";

import { paths } from "./constants/Paths.js";

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
