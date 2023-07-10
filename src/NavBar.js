import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { LanguageContext } from "./LanguageContext";
import { RouteBuilder } from "./components/Helpers_Routing";

const NavBar = (props) => {
  const paths = props.paths;
  const { currentLanguage, changeLanguage } = useContext(LanguageContext);
  const handleLanguageChange = (language) => {
    changeLanguage(language);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-background">
      <div className="container">
        <Link className="navbar-brand" to="/">
          React CV
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {RouteBuilder(paths)}

            <li className="nav-item" key="language">
              <div>
                <select
                  value={currentLanguage}
                  onChange={(e) => handleLanguageChange(e.target.value)}
                >
                  <option value="it">Italian</option>
                  <option value="en">English</option>
                  <option value="zh">中文</option>
                </select>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
