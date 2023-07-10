import React from "react";
import { useNavigate } from "react-router-dom";
import { translate } from "./Helpers";

/**
 * Crea un custom <li> andando in ricorsione se ci sono submenus
 * @param {string} label La label
 * @param {string} path Il Path
 * @param {array|null} submenus Eventuali Submenus
 */
export const CustomLiX = (label, path, submenus) => {
  const navigate = useNavigate();
  return (
    <>
      {submenus ? (
        <li className="nav-item dropdown" key={path}>
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
        <li className="nav-item" key={path}>
          <button
            className="nav-link btn btn-link"
            onClick={() => navigate(path)}
          >
            {translate(label)}
          </button>
        </li>
      )}
    </>
  );
};

/**
 * Fa un render dell'albero di routing e scrive la NavBar
 * @param {array} paths I Paths (vedi Paths.js)
 */
export const RouteBuilder = (paths) => {
  return paths.map((item) => CustomLiX(item.label, item.path, item.submenus));
};
