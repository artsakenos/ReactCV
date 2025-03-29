import React from "react";
import { useNavigate } from "react-router-dom";
import { translate } from "./Helpers";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import { LanguageProvider } from "./LanguageContext";

/**
 * Crea un custom <li> andando in ricorsione se ci sono submenus
 * @param {string} label La label
 * @param {string} path Il Path
 * @param {array|null} submenus Eventuali Submenus
 */
export const CustomLiX = (label, path, submenus, icon) => {
  const navigate = useNavigate();
  return (
    <>
      {submenus ? (
        <li className="nav-item dropdown" key={path} id={path}>
          <a
            className="nav-link dropdown-toggle"
            href="/"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {translate(label)}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            {submenus.map((item) =>
              CustomLiX(item.label, item.path, item.submenus)
            )}
          </ul>
        </li>
      ) : (
        <li className="nav-item" key={path} id={path}>
          <button
            className="nav-link btn btn-link"
            onClick={() => navigate(path)}
          >
            {icon && <img className="navbar-icon" src={icon} alt={icon} />}
            {translate(label)}
          </button>
        </li>
      )}
    </>
  );
};

/**
 * Fa un render dell'albero di routing e scrive la NavBar
 * @param {array} paths I Paths (vedi paths.js)
 */
export const RouteBuilder = (paths, language) => {
  return paths.map((item) =>
    CustomLiX(item.label, item.path, item.submenus, item.icon)
  );
};

/**
 * 
 * @param {*} paths Il Json con i Paths
 * @param {*} app_name Il nome dell'app
 * @param {*} base_path Il Base path. Se lo setti qui, ricorda di settarlo anche in package.json::"homepage"
 * @returns Tutto il router.
 */
export const UR_Router = (paths, app_name, base_path = '') => {
  return (
    <Router basename={base_path}>
      <LanguageProvider>
        <div className="App">
          <NavBar paths={paths} name={app_name} />

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
  )
}
